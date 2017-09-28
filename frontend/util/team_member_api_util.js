
export const fetchTeamMembers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/team_members'
  })
);

export const fetchTeamMember = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/team_members/${id}`
  })
);

export const updateTeamMember = (team_member) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/team_members/${team_member.id}`,
    data: { team_member }
  })
);

export const createTeamMember = (team_member) => (
  $.ajax({
    method: 'POST',
    url: '/api/team_members',
    data: { team_member }
  })
);

export const deleteTeamMember = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/team_members/${id}`
  })
);
