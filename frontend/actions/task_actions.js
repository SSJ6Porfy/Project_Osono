import * as TaskAPIUtil from "../util/session_api_util";

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const fetchTasks = () = dispatch => (
  TaskAPIUtil.fetchTasks()
    .then(res => (dispatch(receiveAllTasks(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const fetchTask = (id) = dispatch => (
  TaskAPIUtil.fetchTask(id)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const createTask = (task) = dispatch => (
  TaskAPIUtil.createTask(task)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);
export const updateTask = (task) = dispatch => (
  TaskAPIUtil.updateTask(task)
    .then(res => (dispatch(receiveTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);

export const deleteTask = (id) = dispatch => (
  TaskAPIUtil.deleteTask(id)
    .then(res => (dispatch(removeTask(res))
    ), err => (dispatch(receiveTaskErrors(err.responseJSON))))
);


export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
})
export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
})

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task
})
