class FixCommentType < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :comment_type, :string
    add_column :comments, :comment_type, :string
  end
end
