class FixCommentTypeAgain < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :comment_type, :string
    add_column :comments, :commentable_type, :string
  end
end
