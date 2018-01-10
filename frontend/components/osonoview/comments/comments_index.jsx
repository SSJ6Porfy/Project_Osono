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
            <p>I'm a Comment, sort'of!</p>
        );
    }
}

export default CommentsIndex;