import React from "react";
import { Link } from "react-router-dom";

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  componentWillReceiveProps(newProps) {
    if ( newProps.currentTeamId && this.props.currentTeamId !== newProps.currentTeamId) {
      this.props.fetchTeamProjects(newProps.currentTeamId)
    }
  }

  render() {
    let projects;
    if (Object.values(this.props.projects).length > 0) {
      projects = Object.values(this.props.projects).map((project,idx) => {
                return <li key={idx+"mat"}><Link to={`/osonoview/projects/${project.id}`}>{project.name}</Link></li>
              });
    } else {
      projects = " "
    }

    return (
      <div>
        <ul>
          { projects }
        </ul>
      </div>
    )
  }
}

export default ProjectIndex;
