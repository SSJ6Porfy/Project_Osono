import { merge } from "lodash";
import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from "../actions/team_actions";

const initialState = {
  currentTeamId: null
}

const UIReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TEAM:
       newState.currentTeamId = action.team.id;
      return newState;
    default:
      return state;
  }
};

export default UIReducer;
