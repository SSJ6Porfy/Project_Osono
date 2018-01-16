import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.shrinkInput = this.shrinkInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.state = {
            user_id: this.props.user.id,
            commentable_id: this.props.match.params.taskId,
            body: ""
        };
        
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.taskId != this.state.commentable_id) {
            this.setState({ "commentable_id": newProps.match.params.taskId });
        }
    }

    shrinkInput(e) {
        e.preventDefault();
        let input = e.currentTarget;
        input.style.height = "30px";
    }

    focusInput(e) {
        e.preventDefault();
        let input = e.currentTarget;
        input.style.transitionDuration = "0.5s";
        input.style.height = "60px";
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    submitComment(e) {
        if (e.charCode === 13) {
            this.props.createComment(this.state)
                .then(() => this.setState({ "body": "" }));
            this.textInput.value = "";
            this.textInput.blur();
        }
    }

    render() {
        console.log(this.props.user);
        return (
            <div className="new-comment-form-container">
                <div className="inner-comment-container">
                    <div className="avatarContainer2">
                        <span className="user-profile2">
                            { this.props.user.username[0].toUpperCase() }
                        </span>
                    </div>
                    <form id="new-comment-form">
                        <textarea id="comment-body-input" 
                                  placeholder="Write a comment... Press Enter to submit"
                                  onChange={this.update("body")}
                                  onKeyPress={this.submitComment}
                                  onFocus={this.focusInput} 
                                  onBlur={this.shrinkInput}
                                  ref={(input) => { this.textInput = input; }}
                                  >
                        </textarea>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentForm;