# == Schema Information
#
# Table name: projects
#
#  id                :integer          not null, primary key
#  project_leader_id :integer          not null
#  team_id           :integer          not null
#  name              :string           not null
#  description       :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Project < ApplicationRecord
  validates :project_leader_id, :team_id, :name, presence: true

  belongs_to :project_leader,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :team,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: 'Team'

  has_many :tasks,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Task'

  has_many :team_members,
    through: :project_leader, source: :team_members
end
