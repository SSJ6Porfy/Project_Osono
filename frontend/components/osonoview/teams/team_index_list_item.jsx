import React from "react";
import { Link } from "react-router-dom";

class TeamIndexListItem extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentTeam = this.setCurrentTeam.bind(this);
  }

  setCurrentTeam(e) {
    e.preventDefault();
    this.props.receiveTeam(this.props.team);
  }

  render() {
    return (
      <li className="team-list-name" onClick={this.setCurrentTeam}>
        <Link to={`/osonoview/teams/${this.props.team.id}`}>
          {this.props.team.name}
        </Link>
      </li>
    );
  }
}

export default TeamIndexListItem;
