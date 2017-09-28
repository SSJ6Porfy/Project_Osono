
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
// export const defaultTeam = (currentUser, teams) => {
//   const teamArr = Object.values(teams);
//
//   let userTeams = teamArr.filter((team) => {
//     return team.user_id == currentUser.id;
//   });
//
//   return usersTeams;
// };

export const leadProjects = (allProjects, currentUser) => {
  let projects = [];

  Object.values(allProjects).forEach((project) => {
    if (project.project_leader_id === Number(currentUser.id)) {
      projects.push(project);
    }
  });

  return projects;
}

export const currentTeamMembers = (team, teamMembers, users) => {
  let team_members = [];

  let currentTeamId = team.id;

  let currentTeamMembers = teamMember

  return team_members;
};
