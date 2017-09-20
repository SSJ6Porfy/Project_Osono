import React from "react";
import Modal from "react-modal";

class SessionSignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
     if (nextProps.loggedIn) {
       this.props.history.push('/');
     }
   }

   update(field) {
     return e => this.setState({
       [field]: e.currentTarget.value
     });
   }

   handleSubmit(e) {
     e.preventDefault();
     const user = this.state;
     this.props.signup(user).then(res => console.log("it worked-Signup"));
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
       Please Signup!
         {this.renderErrors()}
         <div className="signup-form">
           <br/>
           <label>Username:
             <input type="text"
               value={this.state.username}
               onChange={this.update('username')}
               className="signup-input"
             />
           </label>
           <br/>
           <label>Password:
             <input type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="signup-input"
             />
           </label>
           <br/>
         <label>Email:
             <input type="text"
               value={this.state.email}
               onChange={this.update('email')}
               className="signup-input"
             />
           </label>
           <br/>
           <input type="submit" value="Submit" />
         </div>
       </form>
     </div>
    )
  }
};

export default SessionSignupForm;
