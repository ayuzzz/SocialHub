import React, { Component } from 'react';
import '../../styles/Posts/posts.css';
import Comment from './Comment';
import NewComment from './NewComment';

class CommentsAndLikes extends Component{
    render()
    {
        const postId = this.props.post.id

        return <div className="comments-and-likes">
                <h4>Comments</h4>
                    {this.props.post.comments.map(comment => <Comment postId = {postId} comment = {comment} key = {comment.id}/>)}
                    <NewComment post = {this.props.post}  addComment = {this.props.addComment} History = {this.props.History}/>
               </div>
    }
}

export default CommentsAndLikes