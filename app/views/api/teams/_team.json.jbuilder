json.extract! team, :id, :user_id, :name, :team_mission

tm = team.members.where.not(id: current_user.id)
json.team_members tm, :id
