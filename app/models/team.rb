# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  department :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :user_id, :name, :department, presence: true

  has_many :team_members,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: 'Team Member'

  has_many :projects,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: 'Project'
end
