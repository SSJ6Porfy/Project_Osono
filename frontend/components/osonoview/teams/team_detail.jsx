import React from "react";
import ProjectIndexContainer from "../projects/project_index_container";
import TeammatesIndexContainer from "../teammates/teammates_index_container";

class TeamDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.team || { name: "", team_mission: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let currentTeam = this.props.match.params.teamId;
    this.props.fetchTeam(currentTeam)
      .then((res) => this.setState(res))
      .then(() => this.props.fetchTeamMembers(currentTeam));
  }

  componentWillReceiveProps(newProps) {
    let currentTeam = this.props.match.params.teamId;
    let newTeam = newProps.match.params.teamId;
    if (currentTeam !== newTeam ) {
      this.props.fetchTeam(newTeam)
        .then((res) => this.setState(res))
        .then(() => this.props.fetchTeamMembers(currentTeam));
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.team_mission === "") {
      this.state.team_mission = " ";
    }
    this.props.updateTeam(this.state)
      .then(() => this.props.history.push(`/osonoview`));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteTeam(this.props.team.id)
      .then(() => this.props.history.push(`/osonoview`));
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
            <div className="team-detail-btn-container">
              <input type="submit" value="Update Team"/>
              <button className="team-detail-delete-btn"
                onClick={this.handleClick}>Delete Team</button>
            </div>

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
    );
  }
}

export default TeamDetail;
