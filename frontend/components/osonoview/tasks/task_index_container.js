import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { fetchTasks, fetchTask, createTask } from "../../../actions/task_actions";
import { currentUserTasks } from "../../../reducers/selectors";

const mapStateToProps = (state) => ({
  tasks: currentUserTasks(state.session.currentUser,state.entities.tasks)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTask: (id) => dispatch(fetchTask()),
  createTask: (task) => dispatch(createTask())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
