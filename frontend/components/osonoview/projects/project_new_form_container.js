import { connect } from 'react-redux';
import ProjectNewForm from "./project_new_form";
import { createProject } from "../../../actions/project_actions";

const mapStateToProps = (state) => ({
  currentTeamId: state.ui.currentTeamId,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectNewForm);
