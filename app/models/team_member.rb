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
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates :team_id, :user_id, presence: true

  belongs_to :user
  belongs_to :team
  

  settings index: { number_of_shards: 1 } do
    mappings dynamic: 'false' do
      indexes :name, analyzer: 'english'
    end
  end

end

TeamMember.__elasticsearch__.client.indices.delete index: TeamMember.index_name rescue nil

# Create the new index with the new mapping
TeamMember.__elasticsearch__.client.indices.create \
  index: TeamMember.index_name,
  body: { settings: TeamMember.settings.to_hash, mappings: TeamMember.mappings.to_hash }

# Index all article records from the DB to Elasticsearch
TeamMember.import