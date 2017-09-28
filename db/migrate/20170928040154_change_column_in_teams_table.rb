class ChangeColumnInTeamsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :teams, :department, :string
    add_column :teams, :team_mission, :text
  end
end
