import React from "react";
import TeamIndexContainer from "../teams/team_index_container";
import ProjectIndexContainer from "../projects/project_index_container";
import NewTeamFormContainer from "../teams/team_new_form_container";
import NewProjectFormContainer from "../projects/project_new_form_container";
import TeammatesIndexContainer from "../teammates/teammates_index_container";
import ReactModal from 'react-modal';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTeamModalIsOpen: false,
      newProjectModalIsOpen: false
    };

    this.openNewTeamModal = this.openNewTeamModal.bind(this);
    this.closeNewTeamModal = this.closeNewTeamModal.bind(this);
    this.openNewProjectModal = this.openNewProjectModal.bind(this);
    this.closeNewProjectModal = this.closeNewProjectModal.bind(this);
  }

  openNewTeamModal() {
    this.setState({newTeamModalIsOpen: true});
  }

  closeNewTeamModal() {
    this.setState({newTeamModalIsOpen: false});
  }

  openNewProjectModal() {
    this.setState({newProjectModalIsOpen: true});
  }

  closeNewProjectModal() {
    this.setState({newProjectModalIsOpen: false});
  }


  render() {
    return (
      <div className="sidebar-container">
        <div className="osono-logo-sidebar">
          <div className="logo-container-sidebar">
            <div className="logo-sidebar">
              <imc src={"http://res.cloudinary.com/ssj6porfy/image/upload/v1505954437/logoNew_vmlcop.png"}></imc>
            </div>
            <h1>Osono</h1>
          </div>
        </div>

        <div className="teammates-sidebar-container">
          <div className="teammates-index-header">
            <h1>Teammates</h1>
          </div>
          <TeammatesIndexContainer/>
        </div>

        <div className="team-index-sidebar-container">
          <div className="team-index-header">
            <h1>Teams</h1>
          <a className="create-team-btn" onClick={this.openNewTeamModal}>
              <svg className="Icon PlusIcon" viewBox="0 0 32 32" height="10" width="10">
                <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18"/>
              </svg>
            </a>
          </div>
          <TeamIndexContainer/>
        </div>
        <div className="project-index-sidebar-container">
          <div className="project-index-header">
            <h1>Projects</h1>
          <a className="create-project-btn" onClick={this.openNewProjectModal}>
              <svg className="Icon PlusIcon" viewBox="0 0 32 32" height="10" width="10">
                <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18"/>
              </svg>
            </a>
          </div>
          <ProjectIndexContainer/>
        </div>
        <ReactModal className="NewTeam Modal"
                 onRequestClose={() => this.closeNewTeamModal()}
                 isOpen={this.state.newTeamModalIsOpen}
                 shouldCloseOnOverlayClick={true}
                 contentLabel="Modal">

            <NewTeamFormContainer closeModal={this.closeNewTeamModal} />

          <button className="close-btn" onClick={this.closeNewTeamModal}>X</button>
        </ReactModal>
        <ReactModal className="NewProject Modal"
                 onRequestClose={() => this.closeNewProjectModal()}
                 isOpen={this.state.newProjectModalIsOpen}
                 shouldCloseOnOverlayClick={true}
                 contentLabel="Modal">

            <NewProjectFormContainer closeModal={this.closeNewProjectModal} />

          <button className="close-btn" onClick={this.closeNewProjectModal}>X</button>
      </ReactModal>
      </div>
    )
  }
}

export default Sidebar;
