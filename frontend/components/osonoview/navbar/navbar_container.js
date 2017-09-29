import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { fetchSearchedTeams } from "../../../actions/team_actions";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  searchedTeams: state.entities.searchedTeams
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchSearchedTeams: (search) => dispatch(fetchSearchedTeams(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
