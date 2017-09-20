import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .then(res => (dispatch(receiveCurrentUser(res))
    ), err => (
    dispatch(receiveErrors(err.responseJSON))
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
})
