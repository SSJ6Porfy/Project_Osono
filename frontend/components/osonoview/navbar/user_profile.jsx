import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.currentUser
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
    this.props.updateUser(this.state).then(() => console.log("successful update"))
  }

  renderErrors() {
    console.log(this.props);
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
      <div>
        <div className="session-form-container">
         <form onSubmit={this.handleSubmit} className="session-form-box">
           <br/>
         <h1 className="formHeader">{this.state.username}'s Profile</h1>
           {this.renderErrors()}
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
      </div>
    )
  }
}

export default UserProfile;
