import { connect } from "react-redux";
import TeamIndex from "./team_index";
import { fetchTeams,
         receiveTeam,
         createTeam,
         updateTeam,
         deleteTeam } from "../../../actions/team_actions";


const mapStateToProps = (state) => ({
  teams: state.entities.teams
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  receiveTeam: (id) => dispatch(receiveTeam(id)),
  createTeam: (team) => dispatch(createTeam(team)),
  updateTeam: (team) => dispatch(updateTeam(team)),
  deleteTeam: (id) => dispatch(deleteTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
