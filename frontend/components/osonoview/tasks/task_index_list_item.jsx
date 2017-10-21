import React from "react";
import { Link } from "react-router-dom";


class TaskIndexListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.removeTask = this.removeTask.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.colorCheckbox = this.colorCheckbox.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.task !== newProps.task) {
      this.setState(newProps.task);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  removeTask(e) {
    e.preventDefault();
    if (this.props.match.params.projectId) {
      let projectId = this.props.match.params.projectId;
      this.props.deleteTask(this.state.id)
        .then(() => this.props.history.push(`/osonoview/projects/${projectId}`));
    } else {
      this.props.deleteTask(this.state.id)
        .then(() => this.props.history.push("/osonoview"));
    }
  }

  colorCheckbox(e) {
    e.preventDefault();
    if (this.state["complete?"]) {
      e.currentTarget.classList.remove("CheckIcon");
      e.currentTarget.classList.add("CheckIcon-complete");
    } else {
      e.currentTarget.classList.remove("CheckIcon-complete");
      e.currentTarget.classList.add("CheckIcon");
    }
  }

  toggleStatus(e) {
    e.preventDefault();

    if (this.state["complete?"] === false) {
      this.state["complete?"] = true;
    } else {
      this.state["complete?"] = false;
    }

    this.props.updateTask(this.state);
  }

  saveChanges(e) {
    e.preventDefault();

    if (this.props.match.params.projectId) {
      let projectId = this.props.match.params.projectId;
      this.props.updateTask(this.state)
        .then(() => {});
    } else {
      this.props.updateTask(this.state)
        .then(() => { });
    }
  }

  render() {
    let linkAddress = (this.props.match.params.projectId) ? (
      `/osonoview/projects/${this.props.match.params.projectId}/tasks/${this.props.task.id}`
    ) : (`/osonoview/tasks/${this.props.task.id}`);

    let iconClass = this.state["complete?"] ? "Icon CheckIcon-complete" : "Icon CheckIcon";
    return (
      <div className="task-row">
        <div className="item-row">
          <li className="item-row-container">
            <div className="task-status-checkbox-container" onClick={this.toggleStatus}>
              <svg className={iconClass}
                   viewBox="0 0 32 32"
                   height="12" width="12"
                   onClick={this.colorCheckbox}
                   >
                <polygon
                  points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
                </polygon>
              </svg>
            </div>
            <Link className="ask-item-name-editable-link" to={linkAddress}>
              <textarea className="task-item-name-editable"
                        onBlur={this.saveChanges}
                        onChange={this.update("name")}
                        value={this.state.name}
                        rows="1"/></Link>
          </li>
          <button className="delete-task-btn" onClick={this.removeTask}>X</button>
        </div>
      </div>
    );
  }
}

export default TaskIndexListItem;
