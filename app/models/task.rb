# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  project_id  :integer
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  complete?   :boolean          default(FALSE)
#

class Task < ApplicationRecord
  validates :user_id, :name, presence: true

  belongs_to :user

  belongs_to :project, optional: true
end
