class FixCommentable < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :task_id, :integer
    remove_column :comments, :parent_id, :integer
    add_column :comments, :commentable_id, :integer
  end
end
