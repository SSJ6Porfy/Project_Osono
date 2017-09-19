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
end
