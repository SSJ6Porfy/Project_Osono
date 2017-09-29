import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TeamDetail from "./team_detail";
import { fetchTeam,
         updateTeam,
         deleteTeam } from "../../../actions/team_actions";

const mapStateToProps = (state, ownProps) => ({
  team: state.entities.teams[ownProps.match.params.teamId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  updateTeam: (team) => dispatch(updateTeam(team)),
  deleteTeam: (id) => dispatch(deleteTeam(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDetail));
