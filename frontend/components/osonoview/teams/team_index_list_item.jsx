import React from "react";
import { Link } from "react-router-dom";

class TeamIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.team;
    this.setCurrentTeam = this.setCurrentTeam.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeam(this.props.team.id);
  }

  setCurrentTeam(e) {
    e.preventDefault();
    this.props.fetchTeam(this.state.id).then((res) => this.setState(res))
  }

  render() {
    return (
      <li className="team-list-name"
          onClick={this.setCurrentTeam}>
        <Link to={`/osonoview/teams/${this.props.team.id}`}>
          {this.props.team.name}
        </Link>
      </li>
    )
  }
}

export default TeamIndexListItem;
