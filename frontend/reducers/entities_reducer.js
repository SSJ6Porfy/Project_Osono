import { combineReducers } from 'redux';
import TaskReducer from "./task_reducer";

export default combineReducers({
  tasks: TaskReducer
})
