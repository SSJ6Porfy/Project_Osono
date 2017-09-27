import React from "react";
import TeamIndexContainer from "../teams/team_index_container";
import ProjectIndexContainer from "../projects/project_index_container";

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar-container">
        <div className="osono-logo-sidebar">
          <div className="logo-container-sidebar">
            <div className="logo-sidebar">
              <imc src={"http://res.cloudinary.com/ssj6porfy/image/upload/v1505954437/logoNew_vmlcop.png"}></imc>
            </div>
            <h1>Osono</h1>
          </div>
        </div>
        <div className="team-index-sidebar-container">
          <div className="team-index-header">
            <h1>Teams</h1>
            <a className="create-team-btn">
              <svg className="Icon PlusIcon" viewBox="0 0 32 32" height="10" width="10">
                <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18"/>
              </svg>
            </a>
          </div>
          <TeamIndexContainer/>
        </div>
        <div className="project-index-sidebar-container">
          <div className="project-index-header">
            <h1>Projects</h1>
          <a className="create-project-btn">
              <svg className="Icon PlusIcon" viewBox="0 0 32 32" height="10" width="10">
                <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18"/>
              </svg>
            </a>
          </div>
          <ProjectIndexContainer/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
