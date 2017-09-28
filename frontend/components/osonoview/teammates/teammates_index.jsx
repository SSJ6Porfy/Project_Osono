import React from 'react';

class TeammatesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTeammates();
  }

  render() {
    let teamMembers = this.props.teammates || {};

    let memberList = Object.values(teamMembers).map((teammate, idx) => {
      return (<li>{teammate.username}</li>)
    })

    if (this.props.team) {
      memberList = this.props.team.team_members.map(({ id }) => {
        return <li><span>{ teamMembers[id].username }</span>
                <button className="remove-teammate-btn">Remove from Team</button>
               </li>
      })
    }

    return (
      <ul>
        { memberList }
      </ul>
    )
  }
};

export default TeammatesIndex;
