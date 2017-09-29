import React from "react";
import ReactModal from 'react-modal';
import SessionLoginFormContainer from "../session_form/session_login_form_container";
import SessionSignupFormContainer from "../session_form/session_signup_form_container";

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false,
      signUpModalIsOpen: false
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.afterOpenLoginModal = this.afterOpenLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
  }

  openLoginModal() {
    this.setState({loginModalIsOpen: true});
  }

  afterOpenLoginModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeLoginModal() {
    this.setState({loginModalIsOpen: false});
  }

  openSignupModal() {
    this.setState({signUpModalIsOpen: true});
  }

  afterOpenSignupModal() {
    // references are now sync'd and can be accessed.
  }

  closeSignupModal() {
    this.setState({signUpModalIsOpen: false});
  }


  render() {

    return (
      <div className="splash_page_container">
        <div className="nav-bar">
          <div className="navbarContainer">
            <div className="logoContainer">
              <div className="logo">
                <imc src={"http://res.cloudinary.com/ssj6porfy/image/upload/v1505954437/logoNew_vmlcop.png"}></imc>
              </div>
              <h1>Osono</h1>
            </div>
            <div className="navbtnContainer">
              <div className="btnContainer">
                <button className="signup btn" onClick={this.openSignupModal}>Signup</button>
                <button className="login btn" onClick={this.openLoginModal}>Login</button>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron">
          <div className="jumbotronContainer">
            <div className="jumbotronMain">
              <h1>TEAMWORK.<br/>OPTIMIZED</h1>
              <p>Osono is the easiest way for teams to<br/>
              track their work—and get results.</p>
            </div>
          </div>
        </div>
      <ReactModal className="Session Modal"
               onRequestClose={() => this.closeLoginModal()}
               isOpen={this.state.loginModalIsOpen}
               shouldCloseOnOverlayClick={true}
               contentLabel="Modal">
          <SessionLoginFormContainer formType={"login"}/>

        <button className="close-btn" onClick={this.closeLoginModal}>X</button>
    </ReactModal>

      <ReactModal className="Session Modal"
               onRequestClose={() => this.closeSignupModal()}
               isOpen={this.state.signUpModalIsOpen}
               shouldCloseOnOverlayClick={true}
               contentLabel="Modal">

          <SessionSignupFormContainer formType={"signup"}/>

        <button className="close-btn" onClick={this.closeSignupModal}>X</button>
    </ReactModal>

      </div>
    );
  }
}

export default SplashPage;
