import React from "react";


class TaskIndexListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.task.name}</li>
    )
  }
}

export default TaskIndexListItem;
