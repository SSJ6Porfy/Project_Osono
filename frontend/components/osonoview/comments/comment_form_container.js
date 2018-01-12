import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment,
         updateComment } from "../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
