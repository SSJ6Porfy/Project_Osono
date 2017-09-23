import React from "react";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <h1>I'm the Task Index</h1>
      </div>
    )
  }
}

export default TaskIndex;
