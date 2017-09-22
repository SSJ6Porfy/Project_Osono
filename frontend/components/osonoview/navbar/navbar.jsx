import React from "react"
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
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
          <div className="avatarContainer">
            <div className="avatar">
              <span>{this.props.currentUser.username[0].toUpperCase()}</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Navbar;
