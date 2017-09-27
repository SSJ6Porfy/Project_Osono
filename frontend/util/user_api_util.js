
export const fetchTeammates = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);
