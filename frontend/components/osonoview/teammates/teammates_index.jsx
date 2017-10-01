import React from 'react';

class TeammatesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeammates();
  }

  handleClick(id) {
    this.props.deleteTeamMember(id).then(() => {});
  }

  render() {
    let teamMembers = this.props.teammates || {};

    let memberList = Object.values(teamMembers).map((teammate, idx) => {
      return (<li key={idx+"team"}>{teammate.username}</li>);
    });

    if (this.props.team) {
      memberList = this.props.team.team_members.map(({ id }, idx) => {
        return <li key={idx+"tm"}><span>{ teamMembers[id].username }</span>
      <button className="remove-teammate-btn"
              onClick={() => this.handleClick(id)}>Remove from Team</button>
          </li>;
      });
    }

    return (
      <ul>
        { memberList }
      </ul>
    );
  }
}

export default TeammatesIndex;
