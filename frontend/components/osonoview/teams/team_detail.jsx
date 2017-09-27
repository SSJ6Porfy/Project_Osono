import React from "react";
import ProjectIndexContainer from "../projects/project_index_container";

class TeamDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="team-detail-container">
        <div className="team-detail-form-container">
          <form>
            <input type="text" value={this.props.team.name}></input>
            <textarea value={this.props.team.description} />
            <input type="submit" value="Update Team"/>
          </form>
        </div>

        <div className="team-project-list-container">
          <ProjectIndexContainer/>
        </div>
      </div>
    )
  }
}

export default TeamDetail;
