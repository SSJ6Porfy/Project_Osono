import { connect } from 'react-redux';
import SessionSignupForm from "./session_signup_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const signedIn = !!state.session.currentUser;
  const { formType } = ownProps
  return { signedIn, errors: state.session.errors || [], formType }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionSignupForm);
