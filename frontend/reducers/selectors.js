
export const currentUserTasks = (currentUser, tasks) => {
  const taskArr = Object.values(tasks);

  let usersTasks = taskArr.filter((task) => {
    return currentUser.id === task.user_id
  });

  return usersTasks;
};
export const defaultTeam = (currentUser, teams) => {
  const teamArr = Object.values(teams);

  let userTeams = teamArr.filter((team) => {
    return team.user_id == currentUser.id;
  });

  return usersTeams;
};
