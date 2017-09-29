import { merge } from "lodash";
import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from "../actions/team_actions";
import { RECEIVE_ALL_TASKS } from "../actions/task_actions";
import { LOGOUT } from '../actions/session_actions';

const initialState = {};

const UIReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TEAM:
       newState.currentTeamId = action.team.id;
      return newState;
    case RECEIVE_ALL_TASKS:
      newState.currentTeamId = null;
      return newState;
      case LOGOUT:
        return initialState;
    default:
      return state;
  }
};

export default UIReducer;
