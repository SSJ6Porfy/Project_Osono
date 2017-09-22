import { connect } from 'react-redux';
import SessionLoginForm from "./session_login_form";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const signedIn = !!state.session.currentUser;
  const { formType } = ownProps
  return { signedIn, errors: state.session.errors || [], formType }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionLoginForm);
