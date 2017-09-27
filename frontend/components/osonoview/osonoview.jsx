import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import TaskIndexContainer from "./tasks/task_index_container";
import TaskDetailContainer from "./tasks/task_detail_container";
import TeamIndexContainer from "./teams/team_index_container";
import ProjectIndexContainer from "./projects/project_index_container";
import ProjectDetailContainer from "./projects/project_detail_container"
import TeamDetailContainer from "./teams/team_detail_container"
import { ProtectedRoute } from '../../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Osonoview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="osono-all">
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
            </div>
            <TeamIndexContainer/>
          </div>
          <div className="project-index-sidebar-container">
            <div className="project-index-header">
              <h1>Projects</h1>
            </div>
            <ProjectIndexContainer/>
          </div>
        </div>
        <div className="osonoview-main-container">
          <NavbarContainer />
        <div className="team-name-container">
          <h1>Team Name</h1>
        </div>
        <div className="main-console-container">


        <Switch>
          <ProtectedRoute exact path="/osonoview/projects/:projectId" component={TaskIndexContainer}/>
          <ProtectedRoute exact path="/osonoview/teams/:teamId" component={TeamDetailContainer}/>
          <ProtectedRoute path="/osonoview" component={TaskIndexContainer}/>
        </Switch>

        <Switch>
          <ProtectedRoute exact path="/osonoview/tasks/:taskId" component={TaskDetailContainer}/>
          <ProtectedRoute exact path="/osonoview/projects/:projectId/tasks/:taskId" component={TaskDetailContainer}/>
        </Switch>

        </div>

      </div>

      </div>
    )
  }
}

export default Osonoview;
