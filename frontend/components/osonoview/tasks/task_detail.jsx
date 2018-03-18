import React from "react";
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comment_form_container';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task || { name: "", description: "" };
    this.closeTaskDetail = this.closeTaskDetail.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.colorCheckbox = this.colorCheckbox.bind(this);
  }

  componentDidMount() {
    const arr = document.getElementsByClassName("task-index-container");
    const el = arr[0];
    if (this.props.match.params.taskId) {
      this.props.fetchTask(this.props.match.params.taskId)
        .then(() => {
          el.classList.add("task-index-container-enabled");
        });
    }
  }

  componentWillUnmount() {
    const arr = document.getElementsByClassName("task-index-container");
    const el = arr[0];
    el.classList.remove("task-index-container-enabled");
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value }, () => {
        this.props.updateTaskInStore(this.state);
      });
    };
  }

  closeTaskDetail(e) {
    e.preventDefault();
    const el = document.getElementsByClassName("task-index-container-enabled");
    if (el[0].classList) {
      el[0].classList.remove("task-index-container-enabled");
    }
    if (this.props.match.params.projectId) {
      let projectId = this.props.match.params.projectId;
      this.props.updateTask(this.state)
        .then(() => this.props.history.push(`/osonoview/projects/${projectId}`));
    } else {
      this.props.updateTask(this.state)
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


  render() {
    let iconClass = this.state["complete?"] ? "Icon CheckIcon-complete" : "Icon CheckIcon";
    return (
      <div className="task-detail-container">
        <div className="task-detail">
        <div className="task-scrollable">
        <div className="task-detail-header-container">
            <button className="close-task-btn"
                  onClick={this.closeTaskDetail}>X</button>
          </div>
          <form className="task-detail-form">
            <div className="task-detail-field-container">
              <label>Task Name
                <br/>
              </label>
              <div className="task-detail-title-container">
                <svg className={iconClass}
                  viewBox="0 0 32 32"
                  height="22" width="22"
                  onClick={this.toggleStatus}>
                <polygon
                  points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615">
                </polygon>
                </svg>
                <input className="task-detail-input"
                    onChange={this.update("name")}
                    type="text"
                    value={this.state.name}></input>
              </div>
              <label>Task Description
                <br/>
              </label>
              <textarea className="task-detail-description-text"
                        onChange={this.update("description")}
                        value={this.state.description || " "}/>
            </div>
          </form>
          <div className="timestamp-container">
          </div>
          <CommentsIndexContainer/>
        </div>
          <div className="comments-container">
            <CommentsFormContainer/>
          </div>
        </div>
      </div>
    );
  }
}



export default TaskDetail;
