class RemoveNullFromTaskTable < ActiveRecord::Migration[5.1]
  def change
    change_column_null :tasks, :name, true
  end
end
