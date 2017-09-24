import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TaskDetail from "./task_detail";
import { fetchTask,
         updateTask,
         deleteTask } from "../../../actions/task_actions";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.taskId) {
    return { task: state.entities.tasks[ownProps.match.params.taskId] };
  } else {
    return { task: {} };
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTask: (id) => dispatch(fetchTask(id)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDetail));
