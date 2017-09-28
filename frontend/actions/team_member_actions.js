import * as TeamMemberAPIUtil from "../util/team_member_api_util";

export const RECEIVE_ALL_TEAM_MEMBERS = 'RECEIVE_ALL_TEAM_MEMBERS';
export const RECEIVE_TEAM_MEMBER = 'RECEIVE_TEAM_MEMBER';
export const REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER';


export const fetchTeamMembers = () => dispatch => (
  TeamMemberAPIUtil.fetchTeamMembers()
    .then(res => dispatch(receiveAllTeamMembers(res)))
);
export const fetchTeamMember = (id) => dispatch => (
  TeamMemberAPIUtil.fetchTeamMember(id)
    .then(res => dispatch(receiveTeamMember(res)))
);
export const createTeamMember = (teamMember) => dispatch => (
  TeamMemberAPIUtil.createTeamMember(teamMember)
    .then(res => dispatch(receiveTeamMember(res)))
);
export const updateTeamMember = (teamMember) => dispatch => (
  TeamMemberAPIUtil.updateTeamMember(teamMember)
    .then(res => dispatch(receiveTeamMember(res)))
  );

export const deleteTeamMember = (id) => dispatch => (
  TeamMemberAPIUtil.deleteTeamMember(id)
    .then(res => dispatch(removeTeamMember(res)))
);


export const receiveAllTeamMembers = (teamMembers) => ({
  type: RECEIVE_ALL_TEAM_MEMBERS,
  teamMembers
})
export const receiveTeamMember = (teamMember) => ({
  type: RECEIVE_TEAM_MEMBER,
  teamMember
})

export const removeTeamMember = (teamMember) => ({
  type: REMOVE_TEAM_MEMBER,
  teamMember
})
