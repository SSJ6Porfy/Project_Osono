import { connect } from 'react-redux';
import TeamNewForm from "./team_new_form";
import { createTeam } from "../../../actions/team_actions";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTeam: (team) => dispatch(createTeam(team))
});

export default connect(null, mapDispatchToProps)(TeamNewForm);
