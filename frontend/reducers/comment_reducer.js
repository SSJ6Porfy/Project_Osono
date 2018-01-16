import { merge } from "lodash";
import { 
          RECEIVE_ALL_COMMENTS, 
          RECEIVE_COMMENT, 
          REMOVE_COMMENT, 
          CLEAR_COMMENTS } from "../actions/comment_actions";

const initialState = {};

const CommentReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      const blankState = {};
      action.comments.forEach((comment) => {
        blankState[comment.id] = comment;
      });
      return blankState;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    case CLEAR_COMMENTS:
      return {};
    default:
      return state;
  }
};

export default CommentReducer;