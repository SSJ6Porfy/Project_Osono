import { combineReducers } from 'redux';
import TaskReducer from "./task_reducer";
import TeamReducer from "./team_reducer";
import ProjectReducer from "./project_reducer";

export default combineReducers({
  tasks: TaskReducer,
  teams: TeamReducer,
  projects: ProjectReducer
})
