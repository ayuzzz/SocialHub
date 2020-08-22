import React, {Component} from 'react';
import '../../styles/Posts/posts.css';
import Post from '../Posts/Post';

class PostArea extends Component{
    render()
    {

        return <div className="postarea">
                    {this.props.posts.map(post => <Post post = {post} key={post.id} likePost = {this.props.likePost} addComment = {this.props.addComment} History = {this.props.History}/>)}                    
                    </div>
    }
}

export default PostArea