
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


export const userProjects = (allProjects, myTeams) => {
  let projects = [];

  if (Object.values(myTeams).length === 0) {
    myTeams = [];
  }

  let teamIds = Object.values(myTeams).map((team) => {
    return team.id;
  });

  Object.values(allProjects).forEach((project) => {
    if (teamIds.includes(project.team_id)) {
      projects.push(project);
    }
  });

  return projects;
};
