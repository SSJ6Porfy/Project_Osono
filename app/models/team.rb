# == Schema Information
#
# Table name: teams
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  team_mission :text
#

class Team < ApplicationRecord
  validates :user_id, :name, presence: true

  has_many :team_members
  has_many :projects

  has_many :members,
    through: :team_members, source: :user
end
