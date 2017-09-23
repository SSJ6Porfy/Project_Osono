import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import TaskIndexContainer from "./tasks/task_index_container";
class Osonoview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <h1>I'm the Dashboard</h1>
      <TaskIndexContainer/>
      </div>
    )
  }
}

export default Osonoview;
