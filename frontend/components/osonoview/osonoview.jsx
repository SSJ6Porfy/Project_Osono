import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import TaskIndexContainer from "./tasks/task_index_container";
import TaskDetailContainer from "./tasks/task_detail_container";
import ProjectDetailContainer from "./projects/project_detail_container";
import TeamDetailContainer from "./teams/team_detail_container";
import { ProtectedRoute } from '../../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Sidebar from "./sidebar/sidebar";
class Osonoview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="osono-all">
        <Sidebar/>
        <div className="osonoview-main-container">
          <NavbarContainer />
        <div className="team-name-container">
        </div>
        <div className="main-console-container">
        <Switch>
          <ProtectedRoute path="/osonoview/projects/:projectId" component={TaskIndexContainer}/>
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
    );
  }
}

export default Osonoview;
