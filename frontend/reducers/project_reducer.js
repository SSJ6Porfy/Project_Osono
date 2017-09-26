import { merge } from "lodash";
import { RECEIVE_ALL_PROJECTS,
         RECEIVE_PROJECT,
         REMOVE_PROJECT,
         RECEIVE_TEAM_PROJECTS } from "../actions/project_actions";

const initialState = {}

const ProjectReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_TEAM_PROJECTS:
      return action.teamProjects;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
    delete newState[action.project.id];
    return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
