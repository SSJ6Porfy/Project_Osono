import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-comment-form-container">
                <div className="inner-comment-container">
                    <div className="avatarContainer2">
                        <span className="user-profile2">
                            { this.props.username[0].toUpperCase() }
                        </span>
                    </div>
                    <form className="new-comment-form">
                        <textarea className="comment-body-input" 
                                  placeholder="Write a comment">
                        </textarea>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentForm;