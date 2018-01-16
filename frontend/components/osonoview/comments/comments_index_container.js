import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentsIndex from "./comments_index";
import { fetchComments,
         createComment,
         deleteComment,
         updateComment,
         clearComments } from "../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments),
  teammates: Object.values(state.entities.teammates),
  loading: state.entities.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: (taskId) => dispatch(fetchComments(taskId)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  clearComments: () => dispatch(clearComments())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex));
