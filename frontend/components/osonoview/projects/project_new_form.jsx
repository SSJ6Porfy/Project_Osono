import React from "react";
import Modal from "react-modal";
import TeamIndexContainer from "../teams/team_index_container";

class ProjectNewForm extends React.Component {
  constructor(props) {
    super(props)
    this.renderErrors = this.renderErrors.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {}

  renderErrors() {}

  render() {
    return (
      <div className="session-form-container">
       <form onSubmit={this.handleSubmit} className="session-form-box">
         <br/>
       <h1 className="formHeader">New Project</h1>
         <h2 className="errors-text">{this.renderErrors()}</h2>
         <div className="login-form">
           <br/>
         <label>Project Name
             <br/>
             <input type="text"
               className="login-input"
             />
           </label>
           <br/>
         <label>Project Description
             <br/>
           <input type="text"
               className="login-input"
             />
           </label>
           <br/>

         <label>Available Teams
           <br/>
         </label>
         <div className="team-list-container">
           <TeamIndexContainer/>
         </div>
         <div className="login-btn-conatainer">
           <input type="submit" value="Create Project" />

         </div>
         </div>
       </form>
     </div>
    )
  }
}

export default ProjectNewForm;
