import { combineReducers } from 'redux';
import TaskReducer from "./task_reducer";
import TeamReducer from "./team_reducer";
import ProjectReducer from "./project_reducer";
import loadingReducer from "./loading_reducer";

export default combineReducers({
  tasks: TaskReducer,
  teams: TeamReducer,
  projects: ProjectReducer,
  loading: loadingReducer
})
