import React from "react"
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import UserProfileContainer from './user_profile_container';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleLogout() {
    this.props.logout().then(() => console.log("successful log out"))
  }

  render() {
    return (
      <div className="mainNavbarContainer">
        <div className="mainNavbarLeft">
          <Link to="/osonoview">My Tasks</Link>
          <Link to="/osonoview">Dashboard</Link>
        <button>+</button>
        </div>
        <div className="mainNavbarCenter"></div>
      <div className="mainNavbarRight">
          <div className="logoutBtnContainer">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          <div className="avatarContainer" onClick={this.openModal}>
            <div className="avatar">
            <span className="user-profile">{this.props.currentUser.username[0].toUpperCase()}</span>
            <ReactModal className="Session Modal"
              onRequestClose={() => this.closeModal()}
              isOpen={this.state.modalIsOpen}
              shouldCloseOnOverlayClick={true}
              contentLabel="Modal">

              <UserProfileContainer closeModal={this.closeModal}/>
            <button className="close-btn" onClick={this.closeModal}>X</button>
            </ReactModal>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Navbar;
