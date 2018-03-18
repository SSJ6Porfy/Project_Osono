json.array! @teams do |team|
    json.id team.id
    json.name team.name
    json.user_id team.user_id
  end