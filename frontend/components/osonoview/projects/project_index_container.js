import { connect } from "react-redux";
import ProjectIndex from "./project_index";
import { fetchProjects,
         fetchTeamProjects,
         fetchProject,
         createProject,
         updateProject,
         deleteProject } from "../../../actions/project_actions";
import { userProjects } from "../../../reducers/selectors";


const mapStateToProps = (state) => {
    return {
      projects: state.entities.projects,
      currentTeam: state.ui.currentTeam,
      loading: state.entities.loading,
      userProjects: userProjects(state.entities.projects,state.entities.teams)
    };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchTeamProjects: (teamId) => dispatch(fetchTeamProjects(teamId)),
  fetchProject: (id) => dispatch(fetchProject(id)),
  createProject: (project) => dispatch(createProject(project)),
  updateProject: (project) => dispatch(updateProject(project)),
  deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
