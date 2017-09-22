import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .then(res => (dispatch(receiveCurrentUser(res))
    ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(res => (dispatch(receiveCurrentUser(null))
  ))
);
export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then(res => (dispatch(receiveCurrentUser(res))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveUpdatedUser = (currentUser) => ({
  type: RECEIVE_UPDATED_USER,
  currentUser
});

export const updateUser = (updatedUser) => dispatch => (
  SessionAPIUtil.updateUser(updatedUser)
    .then(res => (dispatch(receiveUpdatedUser(res))
    ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
})
