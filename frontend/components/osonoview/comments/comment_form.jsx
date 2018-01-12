import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-comment-form-container">
                <form>
                    <textarea className="comment-body-input" 
                              placeholder="Write a comment">
                    </textarea>
                </form>
            </div>
        );
    }
}

export default CommentForm;