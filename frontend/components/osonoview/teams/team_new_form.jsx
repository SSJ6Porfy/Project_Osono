import React from "react";
import Modal from "react-modal";

class TeamNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      name: "",
      team_mission: ""
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
    this.props.createTeam(this.state).then(() => this.props.closeModal());
  }

  renderErrors() {}

  render() {
    return (
      <div className="session-form-container">
       <form onSubmit={this.handleSubmit} className="session-form-box">
         <br/>
       <h1 className="formHeader">New Team</h1>
         <h2 className="errors-text">{this.renderErrors()}</h2>
         <div className="login-form">
           <br/>
         <label>Team Name
             <br/>
             <input type="text"
               onChange={this.update('name')}
               className="login-input"
             />
           </label>
           <br/>
         <label>Team Misson
             <br/>
           <input type="text"
               onChange={this.update('team_mission')}
               className="login-input"
             />
           </label>
           <br/>
         <div className="login-btn-conatainer">
           <input type="submit" value="Create Team" />

         </div>
         </div>
       </form>
     </div>
   );
  }
}

export default TeamNewForm;
