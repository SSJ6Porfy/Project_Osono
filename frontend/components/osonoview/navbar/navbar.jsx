import React from "react";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import UserProfileContainer from './user_profile_container';
import { fetchSearchedTeams } from '../../../util/search_team_api_util';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      modalIsOpen: false,
      search: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reloadProjects = this.reloadProjects.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
    this.displaySearch = this.displaySearch.bind(this);
    this.fetchSearchedTeams = fetchSearchedTeams.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleLogout() {
    this.props.logout().then(() => console.log("successful log out"));
  }

  handleChange(e) {
    e.preventDefault();
    this.fetchSearchedTeams(e.target.value)
      .then((res) => this.setState({ search: res }));
  }

  reloadProjects(e) {
    this.props.fetchProjects()
      .then((res) => this.props.history.push("/osonoview"));
  }

  displaySearch(e) {
    e.preventDefault();
    const el = document.getElementById("search-index-container");
    const search = document.getElementById("search-input");
    $(document).click(function (e) {
      if (e.target == search) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    });
  }

  closeSearch(e) {
    const el = document.getElementById("search-index-container");
    el.style.display = "none";
    const search = document.getElementById("search-input");
    search.value = "";
  }

  handleTeam(team, e) {
    if (e.currentTarget.innerText === "Leave Team") {
      let deletedMembership;
      team.team_members.forEach((teamMember) => {
        if (teamMember.user_id === this.props.currentUser.id) {
          deletedMembership = teamMember.id;
        }
      });
      this.props.deleteTeamMember(deletedMembership)
        .then(() => this.props.fetchTeams())
        .then(() => this.props.fetchProjects())
        .then(() => this.props.fetchTeammates())
        .then(() => this.closeSearch());
    } else {
      let newTeamMember = { user_id: this.props.currentUser.id,
                            team_id: team.id };
      this.props.createTeamMember(newTeamMember)
        .then(() => this.props.fetchTeams())
        .then(() => this.props.fetchProjects())
        .then(() => this.props.fetchTeammates())
        .then(() => this.closeSearch());
    }
  }


  render() {
    let searchedTeams = this.state.search.map((team, idx) => {
        let searchedTeamId = team.id;
        let currentUserId = this.props.currentUser.id;
        let teamFromStore = this.props.teams[searchedTeamId];
        let membership = false;
        if (teamFromStore) {
          let members = [];
          teamFromStore.team_members.forEach(member => {
            members.push(member.user_id);
          });
          if (members.includes(currentUserId)) {
              membership = true;
          }
        }
        let btnText = "Join!";
        if (membership) {
          btnText = "Leave Team";
        }
        let teamHandle = teamFromStore ? teamFromStore : team;
      return (<div key={idx+team}
                   className="searched-team-list-item"
                   >
                <div className="searched-team-list-item-inner">
                  <li key={team + idx}>
                    <h3 className="searched-team-list-name">{team.name}</h3>
                  </li>
                  <button className="join-status-btn"
                          onClick={(e) => this.handleTeam(teamHandle, e)}
                    >{btnText}</button>
                </div>
              </div>
             );
    });
    let search = (<div id="search-index-container">
                    <div className="search-header-container">
                      <h3 className="search-header-text">Search for Teams to Join!</h3>
                    </div>
                    {searchedTeams}
                 </div>);
    return (
      <div className="mainNavbarContainer">
        <div className="mainNavbarLeft">
          <span onClick={this.reloadProjects}>My Tasks</span>
          <Link to="/osonoview">Dashboard</Link>
          <button>+</button>
        </div>
        <div className="mainNavbarCenter">
          <div className="search-container">
            <svg className="Icon MagnifyerIcon TopbarSearch-icon"
                 viewBox="0 0 32 32">
                 <path d="M29.707,28.293l-8.256-8.256C23.042,
                          18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2
                          ,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958
                          ,7.037-2.549l8.256,8.256L29.707,28.293z M4,
                          13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,
                          9-9,9C8.037,22,4,17.963,4,13z"></path>
            </svg>
            <input id="search-input"
                   type="text"
                   onChange={this.handleChange}
                   onFocus={this.displaySearch}
                   placeholder="search"></input>
          </div>
        </div>
        {search}
        <div className="mainNavbarRight">
          <div className="logoutBtnContainer">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          <div className="avatarContainer" onClick={this.openModal}>
            <div className="avatar">
              <span className="user-profile">{this.props.currentUser.username[0].toUpperCase()}</span>
              <ReactModal className="Session Modal"
                onRequestClose={() => this.closeModal()}
                isOpen={this.state.modalIsOpen}
                shouldCloseOnOverlayClick={true}
                contentLabel="Modal">

                <UserProfileContainer closeModal={this.closeModal}/>
                <button className="close-btn" onClick={this.closeModal}>X</button>
              </ReactModal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
