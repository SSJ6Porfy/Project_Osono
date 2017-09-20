import { combineReducers } from "redux";
import SessionErrorReducer from "./session_errors_reducer";

export default combineReducers({
  session: SessionErrorReducer
})
