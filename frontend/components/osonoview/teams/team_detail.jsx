import React from "react";
import ProjectIndexContainer from "../projects/project_index_container";
import TeammatesIndexContainer from "../teammates/teammates_index_container";

class TeamDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.team || { name: "", team_mission: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.teamId).then((res) => this.setState(res));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.teamId !== newProps.match.params.teamId) {
      this.props.fetchTeam(newProps.match.params.teamId).then((res) => this.setState(res))
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.team_mission === "") {
      this.state.team_mission = " "
    }
    this.props.updateTeam(this.state)
      .then(() => this.props.history.push(`/osonoview/teams/${this.props.team.id}`));
  }

  render() {
    return(
      <div className="team-detail-container">
        <div className="team-detail-form-container">
          <div className="team-detail-header-container">

          </div>
          <form className="team-detail-form" onSubmit={this.handleSubmit}>
            <label>Team Name
              <br/>
            <input className="team-detail-name-input"
                   type="text"
                   onChange={this.update("name")}
                   value={this.state.name}></input>
            </label>
            <label>Team Mission
              <br/>
            <textarea className="team-detail-description-input"
                      onChange={this.update("team_mission")}
                      value={this.state.team_mission} />
            </label>
            <label>Team Members
              <br/>
            </label>
              <div className="team-detail-teammates-index">
                <TeammatesIndexContainer team={this.props.team}/>
              </div>

            <input type="submit" value="Update Team"/>
          </form>
        </div>

        <div className="team-project-list-container">
          <div className="team-detail-header-container">

          </div>
          <h1>{this.state.name}'s Project List</h1>
          <div className="project-index-inner-container">
            <ProjectIndexContainer/>
          </div>

        </div>
      </div>
    )
  }
}

export default TeamDetail;
