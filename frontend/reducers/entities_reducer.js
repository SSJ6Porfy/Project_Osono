import { combineReducers } from 'redux';
import TaskReducer from "./task_reducer";
import TeamReducer from "./team_reducer";

export default combineReducers({
  tasks: TaskReducer,
  teams: TeamReducer
})
