import React from "react";
import TaskIndexListItem from "./task_index_list_item";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
    this.task = { "user_id": this.props.currentUser.id, "project_id": 1, "name": "new task", "description": " ", "complete?": false };
    this.newTask = this.newTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  newTask(e) {
    e.preventDefault();
    this.props.createTask(this.task).then(() => console.log("new task!"))
  }


  render() {
    let result = this.props.tasks.map((task, idx) => {
      return ( <TaskIndexListItem className="task-index-item"
                                  key={idx+"porf"}
                                  task={task}
                                  history={this.props.history}
                                  deleteTask={this.props.deleteTask}
                                  updateTask={this.props.updateTask}/> )
    })
    return (
      <div className="task-index-container">
        <div className="task-index-header-container">
          <a className="header-add-task-btn" onClick={this.newTask}>Add Task</a>
        </div>
        <ul>
          { result }
        </ul>
      </div>
    )
  }
}

export default TaskIndex;
