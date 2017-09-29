import React from "react";
import Modal from "react-modal";
import TeamIndexContainer from "../teams/team_index_container";

class ProjectNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project_leader_id: this.props.currentUserId,
                   name: "",
                   description: "",
                   team_id: this.props.currentTeamId
                 };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state).then(() => this.props.closeModal());
  }

  renderErrors() {}

  render() {
    return (
      <div className="new-project-form-container">
       <form onSubmit={this.handleSubmit} className="new-project-form-box">
         <br/>
       <h1 className="formHeader">New Project</h1>
         <h2 className="errors-text">{this.renderErrors()}</h2>
       <div className="new-project-form">
           <br/>
         <label>Project Name
             <br/>
             <input type="text"
                    className="new-project-input"
                    onChange={this.update('name')}
             />
           </label>
           <br/>
         <label>Project Description
             <br/>
           <input type="text"
                  className="new-project-input"
                  onChange={this.update('description')}
             />
           </label>
           <br/>

         <label>Available Teams
           <br/>
         </label>
         <div className="team-list-container">
           <TeamIndexContainer/>
         </div>
         <div className="new-project-btn-container">
           <input type="submit" value="Create Project"/>

         </div>
         </div>
       </form>
     </div>
   );
  }
}

export default ProjectNewForm;
