import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.shrinkInput = this.shrinkInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    shrinkInput(e) {
        e.preventDefault();
        let input = e.currentTarget;
        input.style.height = "30px";
    }

    focusInput(e) {
        e.preventDefault();
        let input = e.currentTarget;
        input.style.height = "80px";
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
                        <textarea onFocus={this.focusInput} onBlur={this.shrinkInput} className="comment-body-input" 
                                  placeholder="Write a comment">
                        </textarea>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentForm;