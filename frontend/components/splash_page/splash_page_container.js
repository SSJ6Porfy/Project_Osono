import { connect } from 'react-redux';
import SplashPage from "./splash_page";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const signedIn = !!state.session.currentUser;
  return { signedIn, errors: state.session.errors || [] };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
