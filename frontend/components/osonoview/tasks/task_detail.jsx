import React from "react";

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task || { name: " ", description: " " };
    this.closeTaskDetail = this.closeTaskDetail.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.taskId) {
      this.props.fetchTask(this.props.match.params.taskId);
    }
    const el = document.getElementsByClassName("task-index-container");
    if (el[0].classList) {
      el[0].classList.add("task-index-container-enabled");
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
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


  render() {
    return (
      <div className="task-detail-container">
        <div className="task-detail">
          <div className="task-detail-header-container">
            <button className="close-task-btn"
                  onClick={this.closeTaskDetail}>X</button>
          </div>
          <form className="task-detail-form">

            <div className="task-detail-field-container">
              <label>Task Name
                <br/>
              </label>
              <input className="task-detail-input"
                     onChange={this.update("name")}
                     type="text"
                     value={this.state.name}></input>
                   <label>Task Description
               <br/>
             </label>
              <textarea className="task-detail-description-text"
                        onChange={this.update("description")}
                        value={this.state.description}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}



export default TaskDetail;
