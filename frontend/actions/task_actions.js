import * as TaskAPIUtil from "../util/task_api_util";

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

export const fetchTasks = (projectId) => dispatch => (
  TaskAPIUtil.fetchTasks(projectId)
    .then(res => (dispatch(receiveAllTasks(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const fetchTask = (id) => dispatch => (
  TaskAPIUtil.fetchTask(id)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const createTask = (task) => dispatch => (
  TaskAPIUtil.createTask(task)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const updateTask = (task) => dispatch => (
  TaskAPIUtil.updateTask(task)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);

export const deleteTask = (id) => dispatch => (
  TaskAPIUtil.deleteTask(id)
    .then(res => (dispatch(removeTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);

export const updateTaskInStore = task => dispatch => {
  return dispatch(receiveTask(task));
};

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});
export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
});

export const receiveTaskErrors = (errors) => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});
