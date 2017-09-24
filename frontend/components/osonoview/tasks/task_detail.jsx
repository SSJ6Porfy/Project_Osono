import React from "react";

class TaskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.task
  }

  componentDidMount() {
    if (this.props.match.params.taskId) {
      this.props.fetchTask(this.props.match.params.taskId)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task)
  }

  render() {
    return (
      <div>
        <h1 className="show-container">I am the Show Container</h1>
      </div>
    )
  }
}

export default TaskDetail;
