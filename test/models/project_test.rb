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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
