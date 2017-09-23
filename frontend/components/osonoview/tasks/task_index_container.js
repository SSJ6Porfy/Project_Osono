import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { fetchTasks,
         fetchTask,
         createTask,
         updateTask, } from "../../../actions/task_actions";

import { currentUserTasks } from "../../../reducers/selectors";

const mapStateToProps = (state) => ({
  tasks: currentUserTasks(state.session.currentUser,state.entities.tasks),
  errors: state.errors.tasks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTask: (id) => dispatch(fetchTask()),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (task) => dispatch(deleteTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
