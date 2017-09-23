import React from "react";


class TaskIndexListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    return (
      <div className="task-row">
        <div className="item-row">
          <li className="item-row-container">
            <div className="task-status-checkbox-container">
              <input className="task-status-checkbox" type="checkbox"/>
            </div>
            <textarea className="task-item-name-editable" value={this.props.task.name}/>
          </li>
        </div>
      </div>

    )
  }
}

export default TaskIndexListItem;
