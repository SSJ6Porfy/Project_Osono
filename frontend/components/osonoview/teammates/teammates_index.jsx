import React from 'react';

class TeammatesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeammates();
  }

  handleClick(e) {
    e.preventDefault();
    let id = e.currentTarget.id;
    this.props.deleteTeamMember(id).then((res) => console.log(res));
  }

  render() {
    let teamMembers = this.props.teammates || {};

    let memberList = Object.values(teamMembers).map((teammate, idx) => {
      return (<li key={idx+"team"}>{teammate.username}</li>);
    });

    if (this.props.team) {
      memberList = this.props.team.team_members.map(({ id }, idx) => {
        return <li key={idx+"tm"}><span>{ teamMembers[id].username }</span>
      <button id={id} className="remove-teammate-btn"
              onClick={this.handleClick}>Remove from Team</button>
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
