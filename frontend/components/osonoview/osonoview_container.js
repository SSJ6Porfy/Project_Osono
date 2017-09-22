import { connect } from 'react-redux';
import Osonoview from "./osonoview";
import { logout } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Osonoview);
