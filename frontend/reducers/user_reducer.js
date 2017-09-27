import { merge } from "lodash";
import { RECEIVE_TEAMMATES } from "../actions/user_actions";


const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMMATES:
      return action.teammates
    default:
      return state;
  }
}

export default UserReducer;
