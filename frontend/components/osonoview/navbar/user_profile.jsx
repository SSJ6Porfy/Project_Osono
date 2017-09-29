import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
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
    console.log(this.props);
    this.props.updateUser(this.state).then(() => this.props.closeModal());
  }

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render() {
    return (
        <div className="session-form-container">
         <form onSubmit={this.handleSubmit} className="session-form-box">
           <br/>
         <div className="formHeaderContainer">
           <div className="avatarContainer">
             <div className="avatar">
               <span className="user-profile">{this.state.username[0].toUpperCase()}</span>
             </div>
           </div>
            <h1 className="user-form-header">{this.state.username}'s Profile</h1>
         </div>

           <h2 className="errors-text">{this.renderErrors()}</h2>
           <div className="login-form">
             <br/>
             <label>Username
               <br/>
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="login-input"
               />
             </label>
             <br/>
           <label>Email
               <br/>
             <input type="text"
                 value={this.state.email}
                 onChange={this.update('email')}
                 className="login-input"
               />
             </label>
             <br/>
           <input type="submit" value="Update Profile" />
           </div>
         </form>
       </div>
    );
  }
}

export default UserProfile;
