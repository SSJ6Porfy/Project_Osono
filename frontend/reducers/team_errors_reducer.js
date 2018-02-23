import { RECEIVE_TEAM_ERRORS, RECEIVE_TEAM } from '../actions/team_actions';

const TeamErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAM_ERRORS:
      return action.errors;
    case RECEIVE_TEAM:
      return [];
    default:
      return state;
  }
};

export default TeamErrorsReducer;