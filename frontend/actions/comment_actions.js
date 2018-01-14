import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const fetchComments = (taskId) => dispatch => (
  CommentAPIUtil.fetchComments(taskId)
    .then(res => (dispatch(receiveAllComments(res))
    ), err => (dispatch(receiveCommentErrors(err.responseJSON))))
);
export const fetchComment = (id) => dispatch => (
  CommentAPIUtil.fetchComment(id)
    .then(res => (dispatch(receiveComment(res))
    ), err => (dispatch(receiveCommentErrors(err.responseJSON))))
);
export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(res => (dispatch(receiveComment(res))
    ), err => (dispatch(receiveCommentErrors(err.responseJSON))))
);
export const updateComment = (comment) => dispatch => (
  CommentAPIUtil.updateComment(comment)
    .then(res => (dispatch(receiveComment(res))
    ), err => (dispatch(receiveCommentErrors(err.responseJSON))))
);

export const deleteComment = (id) => dispatch => (
  CommentAPIUtil.deleteComment(id)
    .then(res => (dispatch(removeComment(res))
    ), err => (dispatch(receiveCommentErrors(err.responseJSON))))
);


export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});
export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});