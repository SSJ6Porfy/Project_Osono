import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.taskId);
    }

    render() {
        let teammate_hash = {};
        teammate_hash["1"] = "Porfy";
        this.props.teammates.forEach((tm) => {
            teammate_hash[tm.id] = tm.username;
        });
        return (
            <div className="comments-list-container">
                <ul className="comment-ul">
                { this.props.comments.map((comment, idx) => {
                    let username = teammate_hash[comment.user_id];
                    if (username === undefined) {
                        username = 'Porfy';
                    }
                    return (
                        <CommentIndexItem key={idx + username} body={comment.body} username={username}/>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default CommentsIndex;