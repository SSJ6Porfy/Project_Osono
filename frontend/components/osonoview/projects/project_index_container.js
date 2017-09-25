import { connect } from "react-redux";
import ProjectIndex from "./project_index";
import { fetchProjects,
         fetchProject,
         createProject,
         updateProject,
         deleteProject } from "../../../actions/project_actions";


const mapStateToProps = (state) => {
  let projects = { name: "a" };
  if (state.entities.projects === {}) {
    projects
  } else {
    projects = state.entities.projects
  }

  return { projects };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (id) => dispatch(fetchProject(id)),
  createProject: (project) => dispatch(createProject(project)),
  updateProject: (project) => dispatch(updateProject(project)),
  deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
