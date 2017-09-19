class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.string :name, null: false
      t.string :description
      t.timestamps
    end
  end
end
