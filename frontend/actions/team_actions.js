import * as TeamAPIUtil from "../util/team_api_util";

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const RECEIVE_TEAM_ERRORS = "RECEIVE_TEAM_ERRORS";

export const fetchTeams = () => dispatch => (
  TeamAPIUtil.fetchTeams()
    .then(res => (dispatch(receiveAllTeams(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);
export const fetchTeam = (id) => dispatch => (
  TeamAPIUtil.fetchTeam(id)
    .then(res => (dispatch(receiveTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);
export const createTeam = (team) => dispatch => (
  TeamAPIUtil.createTeam(team)
    .then(res => (dispatch(receiveTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);
export const updateTeam = (team) => dispatch => (
  TeamAPIUtil.updateTeam(team)
    .then(res => (dispatch(receiveTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);

export const deleteTeam = (id) => dispatch => (
  TeamAPIUtil.deleteTeam(id)
    .then(res => (dispatch(removeTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);


export const receiveAllTeams = (teams) => ({
  type: RECEIVE_ALL_TEAMS,
  teams
})
export const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
})

export const removeTeam = (team) => ({
  type: REMOVE_TEAM,
  team
})

export const receiveTeamErrors = (errors) => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});
