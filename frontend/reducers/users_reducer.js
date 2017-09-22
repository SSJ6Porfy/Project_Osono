import { merge }from 'lodash';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const UsersReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_UPDATED_USER:
      newState[action.updatedUser.id] = action.updatedUser
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
