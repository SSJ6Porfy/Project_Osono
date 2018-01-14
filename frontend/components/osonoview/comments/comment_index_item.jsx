import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-index-item-container">
                <div className="avatar">
                    <span className="user-profile">
                        { this.props.username }
                    </span>
                </div>
                <div className="comment-name-container">
                { this.props.name }
                </div>
                { this.props.body }
            </div>
        );
    }
}

export default CommentIndexItem;