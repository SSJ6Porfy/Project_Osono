export const fetchSearchedTeams = (name) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search?q=${name}`
  });
};
