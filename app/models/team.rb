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

require 'elasticsearch/model'

class Team < ApplicationRecord
  
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
  
  validates :user_id, :name, presence: true

  has_many :team_members
  has_many :projects

  has_many :members,
    through: :team_members, source: :user

  def self.search(query)
    puts query
    __elasticsearch__.search(
      {
        query: {
          match_phrase_prefix: { name: query }
          }
      }
    )
  end

  settings index: { number_of_shards: 1 } do
    mappings dynamic: 'false' do
      indexes :name, analyzer: 'english'
    end
  end

end

Team.__elasticsearch__.client.indices.delete index: Team.index_name rescue nil

# Create the new index with the new mapping
Team.__elasticsearch__.client.indices.create \
  index: Team.index_name,
  body: { settings: Team.settings.to_hash, mappings: Team.mappings.to_hash }

# Index all article records from the DB to Elasticsearch
Team.import