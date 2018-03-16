import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import values from "lodash/values";
import TaskIndex from "./task_index";
import { fetchTasks,
         fetchTask,
         createTask,
         updateTask,
         deleteTask,
         updateTaskInStore } from "../../../actions/task_actions";

import { currentTasks } from "../../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  let tasks = currentTasks(state.session.currentUser, state.entities.tasks, ownProps.match.params);
  return {
    tasks: tasks,
    errors: state.errors.tasks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTasks: (projectId) => dispatch(fetchTasks(projectId)),
  fetchTask: (id) => dispatch(fetchTask()),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateTaskInStore: (task) => dispatch(updateTaskInStore(task))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));
