import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUpdatedUser = (updatedUser) => ({
  type: RECEIVE_UPDATED_USER,
  updatedUser
});

export const updateUser = (updatedUser) => dispatch => (
  UserAPIUtil.updateUser(updatedUser)
    .then(res => (dispatch(receiveUpdatedUser(res))
    ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
})
