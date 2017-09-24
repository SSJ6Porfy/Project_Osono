import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import TaskIndexContainer from "./tasks/task_index_container";
import TaskDetailContainer from "./tasks/task_detail_container";
import TeamIndexContainer from "./teams/team_index_container";
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
          <TeamIndexContainer />
        </div>
        <div className="osonoview-main-container">
          <NavbarContainer />
        <div className="team-name-container">
          <h1>Team Name</h1>
        </div>
        <TaskIndexContainer/>
        <ProtectedRoute exact path="/osonoview/tasks/:taskId" component={TaskDetailContainer}/>
      </div>

      </div>
    )
  }
}

export default Osonoview;
