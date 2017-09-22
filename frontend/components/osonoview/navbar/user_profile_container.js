import { connect } from 'react-redux';
import UserProfile from "./user_profile";
import { updateUser } from "../../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
  currentUser: state.session.currentUser,
  errors: state.session.errors || []
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (updatedUser) => dispatch(updateUser(updatedUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
