import { connect } from 'react-redux';
import UserProfile from "./user_profile";
import { updatedUser } from "../../../actions/user_actions";

const mapStateToProps = (state) => ({
  currentUser: state.user,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (updatedUser) => dispatch(updateUser(updatedUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
