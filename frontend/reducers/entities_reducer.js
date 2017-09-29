import { combineReducers } from 'redux';
import TaskReducer from "./task_reducer";
import TeamReducer from "./team_reducer";
import ProjectReducer from "./project_reducer";
import loadingReducer from "./loading_reducer";
import UserReducer from "./user_reducer";
import TeamMemberReducer from "./team_member_reducer";
import SearchedTeamReducer from "./searched_team_reducer";

export default combineReducers({
  tasks: TaskReducer,
  teams: TeamReducer,
  projects: ProjectReducer,
  loading: loadingReducer,
  teammates: UserReducer,
  team_members: TeamMemberReducer,
  searchedTeams: SearchedTeamReducer
})
