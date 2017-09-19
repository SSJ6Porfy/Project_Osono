class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :department, null: false
      t.timestamps
    end
    add_index :teams, :name
  end
end
