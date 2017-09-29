
export const fetchProjects = (team_id) => {
  let team_query = team_id ? `?team_id=${team_id}` : "";
  return $.ajax({
    method: 'GET',
    url: `/api/projects${team_query}`
  });
};

export const fetchProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const updateProject = (project) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project }
  })
);

export const createProject = (project) => (
  $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project }
  })
);

export const deleteProject = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  })
);
