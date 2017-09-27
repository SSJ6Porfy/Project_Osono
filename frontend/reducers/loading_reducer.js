import { merge } from "lodash";
import { START_LOADING_PROJECTS,
         RECEIVE_TEAM_PROJECTS } from "../actions/project_actions";

const loadingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_PROJECTS:
      return true;
    case RECEIVE_TEAM_PROJECTS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
