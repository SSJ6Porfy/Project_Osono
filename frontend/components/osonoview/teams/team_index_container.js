import { connect } from "react-redux";
import TeamIndex from "./team_index";
import { fetchTeams,
         fetchTeam,
         createTeam,
         updateTeam,
         deleteTeam } from "../../../actions/team_actions";


const mapStateToProps = (state) => {
  let teams = { name: "a" };
  if (state.entities.teams === {}) {
    teams
  } else {
    teams = state.entities.teams
  }

  return { teams };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  createTeam: (team) => dispatch(createTeam(team)),
  updateTeam: (team) => dispatch(updateTeam(team)),
  deleteTeam: (id) => dispatch(deleteTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
