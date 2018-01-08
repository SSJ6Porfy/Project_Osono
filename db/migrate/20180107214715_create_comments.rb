class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :task_id
      t.integer :user_id, null: false
      t.integer :parent_id
      t.string :comment_type, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
