import React from "react"

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
      <div>
        <div>
          <h1>I'm the Navbar!</h1>
        </div>
        <div>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        <div>
          { this.props.currentUser.username }
        </div>
      </div>
    )
  }
}

export default Navbar;
