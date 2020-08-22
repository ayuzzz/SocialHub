import React, { Component } from 'react';
import '../../styles/Posts/posts.css';
import Comment from './Comment';
import NewComment from './NewComment';

class CommentsAndLikes extends Component{
    constructor()
    {
        super();
        this.likePost = this.likePost.bind(this)
    }

    render()
    {
        const postId = this.props.post.id
        const likes = this.props.post.likes

        return <div className="comments-and-likes">
                    <div>
                        <button className="likes" onClick = {this.likePost}><button id="like-button"></button> <strong>{likes}</strong></button>
                    </div>
                    <h4>Comments</h4>
                    {this.props.post.comments.map(comment => <Comment postId = {postId} comment = {comment} key = {comment.id}/>)}
                    <NewComment post = {this.props.post}  addComment = {this.props.addComment} History = {this.props.History}/>
               </div>
    }

    likePost()
    {
        const postId  = this.props.post.id        
        this.props.likePost(postId)
        this.props.History.history.push("/") 
    }
}

export default CommentsAndLikes