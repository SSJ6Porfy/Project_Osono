import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import { fetchProjects } from "../../../actions/project_actions";
import { fetchSearchedTeams } from "../../../actions/team_actions";
import Navbar from "./navbar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  searchedTeams: state.entities.searchedTeams
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchSearchedTeams: (search) => dispatch(fetchSearchedTeams(search))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
