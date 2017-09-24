import React from "react";

class TaskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.task;
    this.saveChanges = this.saveChanges.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.taskId) {
      this.props.fetchTask(this.props.match.params.taskId)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task)
  }

  saveChanges(e) {
    e.preventDefault();
    const el = document.getElementsByClassName("task-index-container-enabled");
    if (el[0].classList) {
      el[0].classList.remove("task-index-container-enabled")
    }
    this.props.updateTask(this.state).then(() => this.props.history.push("/osonoview"))
  }

  render() {
    return (
      <div className="task-detail-container">
        <form className="task-detail">
          <button className="close-btn"
                  onClick={this.saveChanges}>X</button>
          <input className="task-detail-name-input" type="text" placeholder={this.props.task.name}></input>
          <textarea className="task-detail-description-text" placeholder={this.props.task.description}/>
        </form>
      </div>
    )
  }
}



export default TaskDetail;
