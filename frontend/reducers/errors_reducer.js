import { combineReducers } from "redux";
import SessionErrorReducer from "./session_errors_reducer";
import TaskErrorsReducer from "./task_errors_reducer";

export default combineReducers({
  session: SessionErrorReducer,
  tasks: TaskErrorsReducer
});
