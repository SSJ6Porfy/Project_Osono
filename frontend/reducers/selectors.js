
export const currentTasks = (currentUser, tasks, params) => {
  const taskArr = Object.values(tasks);


  let usersTasks = taskArr.filter((task) => {
    return currentUser.id === task.user_id
  });

  let projectTasks = taskArr.filter((task) => {
    return Number(params.projectId) === task.project_id
  });

  if (params.projectId) {
    return projectTasks;
  } else {
    return usersTasks;
  }
};
export const defaultTeam = (currentUser, teams) => {
  const teamArr = Object.values(teams);

  let userTeams = teamArr.filter((team) => {
    return team.user_id == currentUser.id;
  });

  return usersTeams;
};
