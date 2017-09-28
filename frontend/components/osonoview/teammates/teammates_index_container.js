import { connect } from "react-redux";
import TeammatesIndex from "./teammates_index";
import { fetchTeammates } from "../../../actions/user_actions";

const mapStateToProps = (state) => ({
  teammates: state.entities.teammates
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeammates: () => dispatch(fetchTeammates())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeammatesIndex);
