import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TeamDetail from "./team_detail";
import { fetchTeamMembers } from "../../../actions/team_member_actions";
import { fetchTeam,
         updateTeam,
         deleteTeam } from "../../../actions/team_actions";

const mapStateToProps = (state, ownProps) => ({
  team: state.entities.teams[ownProps.match.params.teamId],
  errors: state.errors.teams
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  updateTeam: (teamId) => dispatch(updateTeam(teamId)),
  deleteTeam: (id) => dispatch(deleteTeam(id)),
  fetchTeamMembers: (teamId) => dispatch(fetchTeamMembers(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetail);
