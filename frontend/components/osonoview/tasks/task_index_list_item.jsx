import React from "react";
import { Link } from "react-router-dom";


class TaskIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.task;
    this.removeTask = this.removeTask.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.addClass = this.addClass.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  removeTask(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.deleteTask(this.props.task.id).then(() => this.props.history.push("/osonoview"))
  }


  toggleStatus(e) {
    e.preventDefault();
    this.state["complete?"] = true;
    this.props.updateTask(this.state).then(() => this.props.history.push("/osonoview"));
  }

  addClass(e) {
    const el = document.getElementsByClassName("task-index-container");
    if (el[0].classList) {
      el[0].classList.add("task-index-container-enabled")
    }
  }

  render() {
    return (
      <div className="task-row">
        <div className="item-row">
          <li className="item-row-container">
            <div className="task-status-checkbox-container" onClick={this.toggleStatus}>
              <svg className="Icon CheckIcon"
                   viewBox="0 0 32 32"
                   height="12" width="12">
                <polygon
                  points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
                </polygon>
              </svg>
            </div>
            <Link className="ask-item-name-editable-link" to={`/osonoview/tasks/${this.props.task.id}`}>
              <textarea className="task-item-name-editable"

                        onChange={this.update("name")}
                        onClick={this.addClass}
                        value={this.state.name}
                        rows="1"/></Link>
          </li>
          <button className="delete-task-btn" onClick={this.removeTask}>X</button>
        </div>
      </div>

    )
  }
}

export default TaskIndexListItem;
