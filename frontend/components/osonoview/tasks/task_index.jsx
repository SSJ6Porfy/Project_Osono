import React from "react";
import TaskIndexListItem from "./task_index_list_item";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.newTask = this.newTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.projectId);
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.projectId !== newProps.match.params.projectId) {
      this.props.fetchTasks(newProps.match.params.projectId);
    }
  }

  newTask(e) {
    e.preventDefault();
    let task = { "user_id": this.props.currentUser.id,
                  "project_id": this.props.match.params.projectId,
                  "name": "new task",
                  "description": " ",
                  "complete?": false
                };
    this.props.createTask(task).then(() => console.log("new task!"));
  }


  render() {
    let result = this.props.tasks.map((task, idx) => {
      return ( <TaskIndexListItem className="task-index-item"
                                  key={idx+"porf"}
                                  task={task}
                                  history={this.props.history}
                                  match={this.props.match}
                                  deleteTask={this.props.deleteTask}
                                  updateTask={this.props.updateTask}/> );
    });
    return (
      <div className="task-index-container">
        <div className="task-index-header-container">
          <a className="header-add-task-btn" onClick={this.newTask}>Add Task</a>
        </div>
        <ul>
          { result }
        </ul>
      </div>
    );
  }
}

export default TaskIndex;
