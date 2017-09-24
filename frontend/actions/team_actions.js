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
export const createTeam = (task) => dispatch => (
  TeamAPIUtil.createTeam(task)
    .then(res => (dispatch(receiveTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);
export const updateTeam = (task) => dispatch => (
  TeamAPIUtil.updateTeam(task)
    .then(res => (dispatch(receiveTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);

export const deleteTeam = (id) => dispatch => (
  TeamAPIUtil.deleteTeam(id)
    .then(res => (dispatch(removeTeam(res))
  ), err => (dispatch(receiveTeamErrors(err.responseJSON))))
);


export const receiveAllTeams = (tasks) => ({
  type: RECEIVE_ALL_TEAMS,
  tasks
})
export const receiveTeam = (task) => ({
  type: RECEIVE_TEAM,
  task
})

export const removeTeam = (task) => ({
  type: REMOVE_TEAM,
  task
})

export const receiveTeamErrors = (errors) => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});
