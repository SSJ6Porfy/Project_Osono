import React from "react";
import ProjectIndexContainer from "../projects/project_index_container";

class TeamDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.team;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchTeam(this.props.params.match.teamId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTeam(this.state)
      .then(() => this.props.history.push(`/osonoview/teams/${this.props.team.id}`));
  }

  render() {
    return(
      <div className="team-detail-container">
        <div className="team-detail-form-container">
          <form onSubmit={this.handleSubmit}>
            <label>Team Name
              <br/>
              <input type="text"
                     onChange={this.update("name")}
                     value={this.state.name}></input>
            </label>
            <label>Team Mission
              <br/>
            <textarea onChange={this.update("description")}
                        value={this.state.description} />
            </label>
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
