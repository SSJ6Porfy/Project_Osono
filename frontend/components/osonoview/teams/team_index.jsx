import React from "react";
import { Link } from "react-router-dom";
import TeamIndexListItem from "./team_index_list_item";

class TeamIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTeams();
  }

  render() {
    let teams;
    if (Object.values(this.props.teams).length > 0) {
      teams = Object.values(this.props.teams).map((team,idx) => {
                return <TeamIndexListItem key={idx+"mat"}
                                          receiveTeam={this.props.receiveTeam}
                                          team={team}/>;
              });
    } else {
      teams = " ";
    }

    return (
      <div>
        <ul>
          { teams }
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
