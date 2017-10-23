import React from "react";
import { Link } from "react-router-dom";

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.currentTeam) {
      this.props.fetchTeamProjects(this.props.currentTeam.id);
    } else {
      this.props.fetchProjects();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentTeam && this.props.currentTeam &&
       this.props.currentTeam.id !== newProps.currentTeam.id) {
      this.props.fetchTeamProjects(newProps.currentTeam.id);
    }
  }

  render() {
    let projects;
    if (Object.values(this.props.projects).length > 0) {
       projects = Object.values(this.props.projects).map((project,idx) => {
                return <li key={idx+"mat"}><Link to={`/osonoview/projects/${project.id}`}>{project.name}</Link></li>;
              });
    }
    return ( this.props.loading ? (<div className="loader">Loading...</div>) : (
        <div>
          <ul>
            { projects }
          </ul>
        </div>
      )
    );
  }
}

export default ProjectIndex;
