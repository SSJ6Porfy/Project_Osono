import React from "react";

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
                return <li key={idx+"mat"}>{team.name}</li>
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
