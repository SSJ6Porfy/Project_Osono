import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectDetail from "./project_detail";
import { fetchProject,
         updateProject,
         deleteProject } from "../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
  if (state.entities.projects[ownProps.match.params.projectId]) {
    return { project: state.entities.projects[ownProps.match.params.projectId] };
  } else {
    return { project: {name: "", description: ""} };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  updateProject: (project) => dispatch(updateProject(project)),
  deleteProject: (id) => dispatch(deleteProject(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
