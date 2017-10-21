import React from 'react';

class TeammatesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.teamId) {
      let currentTeam = this.props.match.params.teamId;
      this.props.fetchTeammates()
        .then(() => this.props.fetchTeamMembers(currentTeam));
    } else {
      this.props.fetchTeammates();
    }
  }

  handleClick(e) {
    e.preventDefault();
    let userId = e.currentTarget.id;
    let id;
    let team;
    this.props.teamMembers.forEach((teamMember) => {
      if (teamMember.user_id === Number(userId)) {
        id = teamMember.id;
        team = teamMember.team_id;
      }
    });
    this.props.deleteTeamMember(id)
      .then(() => this.props.fetchTeamMembers(team));
  }

  render() {
    let teammateList;
    let teamMemberArray = this.props.teamMembers.map((teamMember) => {
      return teamMember.user_id;
    });

    if (this.props.match.params.teamId) {
      teammateList = this.props.teammates.map((teammate, idx) => {
        if (teamMemberArray.includes(teammate.id)) {
          return ( <li key={idx+"ml"}>{teammate.username}
                  <button className="remove-teammate-btn"
                          id={teammate.id}
                          onClick={this.handleClick}
                    >Remove from team</button>
                  </li>);
        }
      });
    } else {
      teammateList = this.props.teammates.map((teammate, idx) => {
        return ( <li key={idx+"ml"}>{teammate.username}</li>);
      });
    }

    return (
      <ul>
        { teammateList }
      </ul>
    );
  }
}

export default TeammatesIndex;
