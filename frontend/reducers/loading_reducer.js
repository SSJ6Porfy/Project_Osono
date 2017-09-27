import { merge } from "lodash";
import { START_LOADING_PROJECTS,
         RECEIVE_ALL_PROJECTS,
         RECEIVE_PROJECT,
         REMOVE_PROJECT,
         RECEIVE_TEAM_PROJECTS } from "../actions/project_actions";

const loadingReducer = (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_PROJECTS:
      return true;
    case RECEIVE_TEAM_PROJECTS:
      return false;
    case RECEIVE_ALL_PROJECTS:
      return false;
    case RECEIVE_PROJECT:
      return false;
    case REMOVE_PROJECT:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
