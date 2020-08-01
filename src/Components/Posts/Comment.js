import React, {Component} from 'react';
import '../../styles/Posts/posts.css';

class Comment extends Component{
    render()
    {
        return <textarea wrap="hard" className="comment" id = {this.props.comment.id} value={this.props.comment.comment} readOnly/>
    }
}

export default Comment