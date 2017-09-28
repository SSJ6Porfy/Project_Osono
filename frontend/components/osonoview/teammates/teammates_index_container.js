import { connect } from "react-redux";
import TeammatesIndex from "./teammates_index";

const mapStateToProps = (state) => ({
  teammates: state.entities.teammates
});

export default connect(mapStateToProps)(TeammatesIndex);
