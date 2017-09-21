class AddColumnToTask < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :complete?, :boolean, default: false
  end
end
