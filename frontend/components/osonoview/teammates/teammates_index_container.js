import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TeammatesIndex from "./teammates_index";
import { fetchTeammates } from "../../../actions/user_actions";
import { createTeamMember,
         deleteTeamMember,
         fetchTeamMembers } from "../../../actions/team_member_actions";

const mapStateToProps = (state, ownProps) => ({
  teammates: Object.values(state.entities.teammates),
  teamMembers: Object.values(state.entities.team_members),
  currentTeam: state.ui.currentTeam
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeammates: () => dispatch(fetchTeammates()),
  createTeamMember: (teamMember) => dispatch(createTeamMember(teamMember)),
  deleteTeamMember: (id) => dispatch(deleteTeamMember(id)),
  fetchTeamMembers: (teamId) => dispatch(fetchTeamMembers(teamId))
});

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(TeammatesIndex));
