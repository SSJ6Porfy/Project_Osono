
export const fetchTeamMembers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/teamMembers'
  })
);

export const fetchTeamMember = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/teamMembers/${id}`
  })
);

export const updateTeamMember = (teamMember) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/teamMembers/${teamMember.id}`,
    data: { teamMember }
  })
);

export const createTeamMember = (teamMember) => (
  $.ajax({
    method: 'POST',
    url: '/api/teamMembers',
    data: { teamMember }
  })
);

export const deleteTeamMember = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/teamMembers/${id}`
  })
);
