
export const fetchTasks = (project_id) => {
  let project_query = project_id ? `?project_id=${project_id}` : "";
  return $.ajax({
    method: 'GET',
    url: `/api/tasks${project_query}`
  });
};

export const fetchTask = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`
  })
);

export const updateTask = (task) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
);

export const createTask = (task) => (
  $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  })
);

export const deleteTask = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  })
);
