import { connect } from 'react-redux';
import SessionSignupForm from "./session_signup_form";
import { signup } from "../../actions/session_actions";
import { fetchTeammates } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  const signedIn = !!state.session.currentUser;
  const { formType } = ownProps;
  return { signedIn, errors: state.errors.session || [], formType };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user)),
  fetchTeammates: () => dispatch(fetchTeammates())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionSignupForm);
