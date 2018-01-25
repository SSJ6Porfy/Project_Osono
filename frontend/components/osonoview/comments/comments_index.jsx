import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.taskId);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.taskId != this.props.match.params.taskId) {
            this.props.fetchComments(newProps.match.params.taskId);
        }
    }

    componentWillUnmount() {
        this.props.clearComments();
    }

    render() {
        if (this.props.loading) {
            return (<div className="loader">Loading...</div>);
        } else {
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
                        console.log(username);
                        if (username === undefined) {
                            username = this.props.user.username;
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
}

export default CommentsIndex;