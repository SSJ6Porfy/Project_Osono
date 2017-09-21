# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  team_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMember < ApplicationRecord
  validates :team_id, :user_id, presence: true

  belongs_to :user
  belongs_to :team
  
end
