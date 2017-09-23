import React from "react";
import TaskIndexListItem from "./task_index_list_item";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    let result = this.props.tasks.map((task, idx) => {
      return <TaskIndexListItem className="task-index-item" key={idx+"porf"} task={task}/>
    })
    return (
      <div className="task-index-container">
        <div className="task-index-header-container">
          <a className="header-add-task-btn">Add Task</a>
        </div>
        <ul>
          { result }
        </ul>
      </div>
    )
  }
}

export default TaskIndex;
