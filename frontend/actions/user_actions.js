import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_TEAMMATES = "RECEIVE_TEAMMATES";

export const fetchTeammates = () => dispatch => (
  UserAPIUtil.fetchTeammates()
    .then(res => dispatch(receiveTeammates(res)))
)

export const receiveTeammates = (teammates) => ({
  type: RECEIVE_TEAMMATES,
  teammates
})
