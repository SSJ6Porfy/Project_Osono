import { connect } from "react-redux";
import TeamIndex from "./team_index";
import { fetchTeams,
         fetchTeam,
         createTeam,
         updateTeam,
         deleteTeam } from "../../../actions/team_actions";

import { currentUserTeams } from "../../../reducers/selectors";

const mapStateToProps = (state) => ({
  teams: currentUserTeams(state.session.currentUser,state.entities.teams),
  errors: state.errors.teams,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  fetchTeam: (id) => dispatch(fetchTeam()),
  createTeam: (team) => dispatch(createTeam(team)),
  updateTeam: (team) => dispatch(updateTeam(team)),
  deleteTeam: (id) => dispatch(deleteTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
