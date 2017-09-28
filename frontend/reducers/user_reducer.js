import { merge } from "lodash";
import { RECEIVE_TEAMMATES } from "../actions/user_actions";
import { LOGOUT } from '../actions/session_actions';


const initialState = {
  teammates: {}
}

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMMATES:
      return action.teammates;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default UserReducer;
