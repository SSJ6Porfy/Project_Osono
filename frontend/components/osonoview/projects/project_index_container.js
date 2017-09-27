import { connect } from "react-redux";
import ProjectIndex from "./project_index";
import { fetchProjects,
         fetchTeamProjects,
         fetchProject,
         createProject,
         updateProject,
         deleteProject } from "../../../actions/project_actions";
import { leadProjects } from "../../../reducers/selectors";


const mapStateToProps = (state) => {
  if (state.ui.currentTeamId) {
    return {
      projects: state.entities.projects,
      currentTeamId: state.ui.currentTeamId,
      loading: state.entities.loading
    };
  } else {
    return {
      projects: leadProjects(state.entities.projects, state.session.currentUser),
      currentTeamId: state.ui.currentTeamId,
      loading: state.entities.loading
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchTeamProjects: (team_id) => dispatch(fetchTeamProjects(team_id)),
  fetchProject: (id) => dispatch(fetchProject(id)),
  createProject: (project) => dispatch(createProject(project)),
  updateProject: (project) => dispatch(updateProject(project)),
  deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
