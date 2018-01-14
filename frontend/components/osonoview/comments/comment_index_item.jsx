import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-index-item-container">
                <div className="avatarContainer2">
                    <span className="user-profile2">
                        { this.props.username[0] }
                    </span>
                </div>
                <div className="comment-content-container">
                    <div className="comment-name">
                        { this.props.username }
                    </div>
                    <div className="comment-body">
                        { this.props.body }    
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentIndexItem;