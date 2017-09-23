import React from "react";


class TaskIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.task
    this.saveChanges = this.saveChanges.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.task)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  saveChanges(e) {
    e.preventDefault();
    this.props.updateTask(this.state).then(() => console.log("success"))
  }


  render() {
    return (
      <div className="task-row">
        <div className="item-row">
          <li className="item-row-container">
            <div className="task-status-checkbox-container">
              <input className="task-status-checkbox" type="checkbox"/>
            </div>
            <textarea className="task-item-name-editable"
                      onBlur={this.saveChanges}
                      onChange={this.update("name")}
                      value={this.state.name}/>
          </li>
        </div>
      </div>

    )
  }
}

export default TaskIndexListItem;
