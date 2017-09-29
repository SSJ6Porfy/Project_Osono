import { merge } from "lodash";
import { RECEIVE_ALL_TEAM_MEMBERS,
         RECEIVE_TEAM_MEMBER,
         REMOVE_TEAM_MEMBER } from "../actions/team_member_actions";
import { LOGOUT } from '../actions/session_actions';

const initialState = {};

const TeamMemberReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);
  const blankState = {};
  switch (action.type) {
    case RECEIVE_ALL_TEAM_MEMBERS:
      return action.teamMembers;
    case RECEIVE_TEAM_MEMBER:
      newState[action.teamMember.id] = action.teamMember;
      return newState;
    case REMOVE_TEAM_MEMBER:
      delete newState[action.teamMember.id];
      return newState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default TeamMemberReducer;
