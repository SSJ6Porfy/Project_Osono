# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :email, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :tasks

  has_many :teams_lead,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Team'

    has_many :team_members

    has_many :teams, through: :team_members, source: :team

    has_many :all_teammates,
      through: :teams, source: :members

    has_many :projects_lead,
      primary_key: :id,
      foreign_key: :project_leader_id,
      class_name: 'Project'

    def teammates
      all_teammates.reject { |user| user.id == self.id }
    end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
