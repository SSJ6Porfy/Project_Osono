import React from "react";
import Modal from "react-modal";

class ProjectNewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="new-project-form-container">
        <div className="new-team-form">
          <form>
            <h1>I'm the Project form</h1>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectNewForm;
