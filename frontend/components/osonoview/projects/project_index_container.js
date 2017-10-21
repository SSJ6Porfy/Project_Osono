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
    return {
      projects: state.entities.projects,
      currentTeam: state.ui.currentTeam,
      loading: state.entities.loading
    };
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
