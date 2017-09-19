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

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
