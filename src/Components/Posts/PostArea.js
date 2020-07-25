import React, {Component} from 'react';
import '../../styles/Posts/posts.css';
import Post from '../Posts/Post';

class PostArea extends Component{
    render()
    {
        return <div className="postarea">
                    <Post/>
               </div>
    }
}

export default PostArea