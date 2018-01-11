import React from 'react';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="comments-container">
                <ul>
                { this.props.comments.map((comment, idx) => {
                    return (
                        <li key={idx + comment.body}>{ comment.body }</li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default CommentsIndex;