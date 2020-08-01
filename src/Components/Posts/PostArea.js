import React, {Component} from 'react';
import '../../styles/Posts/posts.css';
import Post from '../Posts/Post';

class PostArea extends Component{
    render()
    {
        const posts = this.props.posts;

        return <div className="postarea">
                    {posts.map(post => <Post post = {post} key={post.id}/>)
                    }                    
               </div>
    }
}

export default PostArea