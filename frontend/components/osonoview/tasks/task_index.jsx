import React from "react";
import TaskIndexListItem from "./task_index_list_item";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.newTask = this.newTask.bind(this);
    // this.keyMoves = this.keyMoves.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.projectId);
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.projectId !== newProps.match.params.projectId) {
      this.props.fetchTasks(newProps.match.params.projectId);
    }
  }

  // keyMoves(e) {
  //   e.preventDefault();
  //   let indexContainer = document.getElementById("task-index-container");
  //   console.log(e.keyCode);
  //   let keyPressed = e.keyCode;
  //   if (keyPressed === 40) {
      
  //   } else if (keyPressed === 38) {
  //     console.log("up");
  //   }
  // }

  newTask(e) {
    e.preventDefault();
    let task = { "user_id": this.props.currentUser.id,
                  "project_id": this.props.match.params.projectId,
                  "name": "",
                  "description": "",
                  "complete?": false
                };
    this.props.createTask(task).then(() => {});
  }


  render() {
    let result = this.props.tasks.map((task, idx) => {
      return ( <TaskIndexListItem className="task-index-item"
                                  key={idx + 1000}
                                  task={task}
                                  history={this.props.history}
                                  match={this.props.match}
                                  updateTaskInStore={this.props.updateTaskInStore}
                                  deleteTask={this.props.deleteTask}
                                  updateTask={this.props.updateTask}/> );
    });
    return (
      <div className="task-index-container" onKeyDown={this.keyMoves}>
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
