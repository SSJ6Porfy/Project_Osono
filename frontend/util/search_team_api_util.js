export const fetchSearchedTeams = (name) => {
  let query = { "query": { "match_phrase_prefix" : { "name" : `${name}` } } };
  query = JSON.stringify(query);
  return $.ajax({
    method: 'POST',
    url: `http://localhost:9200/teams/_search`,
    dataType: 'json',
    contentType: 'application/json',
    data: query
  });
};
