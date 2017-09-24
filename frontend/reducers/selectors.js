
export const currentUserTasks = (currentUser, tasks) => {
  const taskArr = Object.values(tasks);

  let usersTasks = taskArr.filter((task) => {
    return currentUser.id === task.user_id
  });

  return usersTasks;
};
export const currentUserTeams = (currentUser, teams) => {
  const teamArr = Object.values(teams);

  let usersTeams = teamArr.filter((team) => {
    let memberIds = team.members.map((member) => {
      return member.id
    })
    return memberIds.includes(currentUser.id);
  });

  return usersTeams;
};
