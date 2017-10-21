import React from "react";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import UserProfileContainer from './user_profile_container';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      modalIsOpen: false,
      search: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reloadProjects = this.reloadProjects.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleLogout() {
    this.props.logout().then(() => console.log("successful log out"));
  }

  handleChange(e) {
    e.preventDefault();
    this.props.fetchSearchedTeams(e.target.value).then(() => {});
  }

  reloadProjects(e) {
    this.props.fetchProjects().then((res) => this.props.history.push("/osonoview"));
  }

  render() {
    return (
      <div className="mainNavbarContainer">
        <div className="mainNavbarLeft">
          <span onClick={this.reloadProjects}>My Tasks</span>
          <Link to="/osonoview">Dashboard</Link>
          <button>+</button>
        </div>
        <div className="mainNavbarCenter">
          <div className="search-container">
            <svg className="Icon MagnifyerIcon TopbarSearch-icon"
                 viewBox="0 0 32 32">
                   <path d="M29.707,28.293l-8.256-8.256C23.042,
                            18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2
                            ,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958
                            ,7.037-2.549l8.256,8.256L29.707,28.293z M4,
                            13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,
                            9-9,9C8.037,22,4,17.963,4,13z"></path>
                 </svg>
            <input type="text"
                   onChange={this.handleChange}
                   placeholder="search"></input>
          </div>
        </div>
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
    );
  }
}

export default Navbar;
