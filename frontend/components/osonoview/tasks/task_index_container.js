import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TaskIndex from "./task_index";
import { fetchTasks,
         fetchTask,
         createTask,
         updateTask,
         deleteTask } from "../../../actions/task_actions";

import { currentUserTasks } from "../../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
  tasks: currentUserTasks(state.session.currentUser,state.entities.tasks),
  errors: state.errors.tasks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTask: (id) => dispatch(fetchTask()),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));
