import * as ProjectAPIUtil from "../util/project_api_util";

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_TEAM_PROJECTS = 'RECEIVE_TEAM_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects()
    .then(res => (dispatch(receiveAllProjects(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);
export const fetchTeamProjects = (team_id) => dispatch => (
  ProjectAPIUtil.fetchProjects(team_id)
    .then(res => (dispatch(receiveTeamProjects(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);

export const fetchProject = (id) => dispatch => (
  ProjectAPIUtil.fetchProject(id)
    .then(res => (dispatch(receiveProject(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);
export const createProject = (project) => dispatch => (
  ProjectAPIUtil.createProject(project)
    .then(res => (dispatch(receiveProject(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);
export const updateProject = (project) => dispatch => (
  ProjectAPIUtil.updateProject(project)
    .then(res => (dispatch(receiveProject(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);

export const deleteProject = (id) => dispatch => (
  ProjectAPIUtil.deleteProject(id)
    .then(res => (dispatch(removeProject(res))
  ), err => (dispatch(receiveProjectErrors(err.responseJSON))))
);


export const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
})
export const receiveTeamProjects = (teamProjects) => ({
  type: RECEIVE_TEAM_PROJECTS,
  teamProjects
})
export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

export const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  project
})

export const receiveProjectErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});
