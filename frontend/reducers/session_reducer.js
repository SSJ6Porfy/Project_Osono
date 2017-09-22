import { merge }from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_UPDATED_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const currentUser = action.currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser });
    case RECEIVE_UPDATED_USER:
      return merge({}, state, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
