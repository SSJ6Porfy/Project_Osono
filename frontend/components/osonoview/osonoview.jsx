import React from "react";
import NavbarContainer from "./navbar/navbar_container";

class Osonoview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <h1>I'm the Dashboard</h1>
      </div>
    )
  }
}

export default Osonoview;
