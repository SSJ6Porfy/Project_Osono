import { RECEIVE_SEARCHED_TEAMS } from "../actions/team_actions";

const initialState = {}

const SearchedTeamReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_TEAMS:
      return action.searchedTeams
    default:
      return state;
  }
}

export default SearchedTeamReducer;
