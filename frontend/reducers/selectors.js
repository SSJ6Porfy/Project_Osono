
export const currentTasks = (currentUser, tasks, params) => {
  const taskArr = Object.values(tasks);


  let usersTasks = taskArr.filter((task) => {
    return currentUser.id === task.user_id;
  });

  let projectTasks = taskArr.filter((task) => {
    return Number(params.projectId) === task.project_id;
  });

  if (params.projectId) {
    return projectTasks;
  } else {
    return usersTasks;
  }
};


export const leadProjects = (allProjects, currentUser) => {
  let projects = [];

  Object.values(allProjects).forEach((project) => {
    if (project.project_leader_id === Number(currentUser.id)) {
      projects.push(project);
    }
  });

  return projects;
};
