import { connect } from "react-redux";
import CommentsIndex from "./comments_index";
import { fetchComments,
         createComment,
         deleteComment,
         updateComment } from "../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
