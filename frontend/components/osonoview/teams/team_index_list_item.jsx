import React from "react";

class TeamIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.team;
    this.setCurrentTeam = this.setCurrentTeam.bind(this);
  }

  setCurrentTeam(e) {
    e.preventDefault();
    this.props.fetchTeam(this.state.id).then(() => {})
  }

  render() {
    return (
      <li onClick={this.setCurrentTeam}>{this.props.team.name}</li>
    )
  }
}

export default TeamIndexListItem;
