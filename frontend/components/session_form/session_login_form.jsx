import React from "react";
import Modal from "react-modal";

class SessionLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);

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

   demoUserLogin(e) {
     e.preventDefault();
     this.setState({"username": "TywinLannister", "password": "password"})
     this.props.login({"username": "TywinLannister", "password": "password"}).then(res => console.log("it worked-Login"));
   }

   handleSubmit(e) {
     e.preventDefault();
     const user = this.state;
     if (this.props.formType === "login") {
       this.props.login(user).then(res => console.log("it worked-Login"));
     } else {
       this.props.signup(user).then(res => console.log("it worked-Signup"));
     }
   }

   renderErrors() {
     console.log(this.props.errors);
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
         <h1 className="formHeader">LOG IN</h1>
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
           <label>Password
             <br/>
             <input type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="login-input"
             />
           </label>
           <br/>
         <div className="login-btn-conatainer">
           <input type="submit" value="LOG IN" />
           <button className="demo-btn" onClick={this.demoUserLogin}>DEMO USER</button>

         </div>
         </div>
       </form>
     </div>
    )
  }
};

export default SessionLoginForm;
