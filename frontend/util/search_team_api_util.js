export const fetchTeams = (name) => {
  let team_query = name ? `${name}` : "";
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${team_query}`
  })
};
