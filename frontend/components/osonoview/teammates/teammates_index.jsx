import React from 'react';


class TeammatesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.teammates !== undefined) {
      let teamMembers = Object.values(this.props.teammates).map((teammate, idx) => {
        return (<li>{teammate.username}</li>)
      })
      return (
        <ul>
          { teamMembers }
        </ul>
      )
    } else {
      return (<div></div>)
    }
  }

};

export default TeammatesIndex;
