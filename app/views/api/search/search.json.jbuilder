json.array! @teams do |team|
    json.id team.id
    json.name team.name
    json.team_members team.team_members
    json.members team.members do |member|
      json.member_id member.id
    end
  end