export const fetchSearchedTeams = (name) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${name}`
  })
};