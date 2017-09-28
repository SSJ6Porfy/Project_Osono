import { connect } from "react-redux";
import TeammatesIndex from "./teammates_index";
import { fetchTeammates } from "../../../actions/user_actions";
import { createTeamMember,
         deleteTeamMember } from "../../../actions/team_member_actions";

const mapStateToProps = (state) => ({
  teammates: state.entities.teammates
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeammates: () => dispatch(fetchTeammates()),
  createTeamMember: (teamMember) => dispatch(createTeamMember(teamMember)),
  deleteTeamMember: (id) => dispatch(deleteTeamMember(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeammatesIndex);
