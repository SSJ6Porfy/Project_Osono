import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import { fetchProjects } from "../../../actions/project_actions";
import { fetchTeammates } from "../../../actions/user_actions";
import { fetchTeams,
         fetchSearchedTeams } from "../../../actions/team_actions";
import { createTeamMember,
         deleteTeamMember } from "../../../actions/team_member_actions";
import Navbar from "./navbar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  searchedTeams: state.entities.searchedTeams,
  teams: state.entities.teams
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchTeams: () => dispatch(fetchTeams()),
  fetchTeammates: () => dispatch(fetchTeammates()),
  fetchSearchedTeams: (search) => dispatch(fetchSearchedTeams(search)),
  createTeamMember: (teamMember) => dispatch(createTeamMember(teamMember)),
  deleteTeamMember: (id) => dispatch(deleteTeamMember(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
