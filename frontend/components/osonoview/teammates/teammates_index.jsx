import React from 'react';
import randomColor from "randomcolor";

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
        let avatar;

        if (teammate.username) {
          avatar = teammate.username.slice(0,2);
        } else {
          avatar = "";
        }
        let style = [
          { background: "#7a6ff0" },
          { background: "#1ccca2" },
          { background: "#ff0000" },
          { background: "#4ca9ef" },
          { background: "#f97a02" },
          { background: "#42a32f" },
          { background: "#d73388" },
      ];
        return ( <li className="teammate-name-avatar"
                      style={style[idx % 8]}
                     key={idx+"ml"}>{avatar}</li>);
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
