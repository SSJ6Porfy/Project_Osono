import { merge } from "lodash";
import { RECEIVE_ALL_TASKS, RECEIVE_TASK, REMOVE_TASK } from "../actions/task_actions";

const initialState = {}

const TaskReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case REMOVE_TASK:
    delete newState[action.task.id];
    return newState;
    default:
      return state;
  }
};

export default TaskReducer;
