import React from "react";
import { Link } from "react-router-dom";

class TeamIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  componentWillMount() {
    this.props.fetchTeams()
  }

  render() {
    let teams;
    if (Object.values(this.props.teams).length > 0) {
      teams = this.props.teams.map((team,idx) => {
                return <li key={idx+"mat"}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>
              });
    } else {
      teams = " "
    }

    return (
      <div>
        <ul>
          { teams }
        </ul>
      </div>
    )
  }
}

export default TeamIndex;
