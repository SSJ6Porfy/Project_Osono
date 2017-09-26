import { merge } from "lodash";
import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from "../actions/team_actions";

const initialState = {}

const TeamReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
    action.teams.forEach((team) => {
      newState[team.id] = team
    })
      return newState;
    case RECEIVE_TEAM:
      newState[action.team.id] = action.team;
      return newState;
    case REMOVE_TEAM:
    delete newState[action.team.id];
    return newState;
    default:
      return state;
  }
};

export default TeamReducer;
