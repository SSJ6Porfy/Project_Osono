class Comment < ApplicationRecord
    validates :user_id, :commentable_id ,:comment_type, presence: true

    belongs_to :commentable, polymorphic: true, optional: true
    has_many :comments, as: :commentable 
end
