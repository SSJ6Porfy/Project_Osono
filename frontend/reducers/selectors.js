
export const currentUserTasks = (currentUser, tasks) => {
  const taskArr = Object.values(tasks);

  let usersTasks = taskArr.filter((task) => {
    return currentUser.id === task.user_id
  });

  return usersTasks;
}
