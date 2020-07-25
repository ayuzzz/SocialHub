import React, {Component} from 'react';
import '../../styles/Posts/posts.css';
import PostArea from '../Posts/PostArea';
import SideMenu from '../Menu/SideMenu';

class PostWall extends Component{
    render()
    {
        return <div className="postwall">
                    <SideMenu/>
                    <PostArea/>
               </div>
    }
}

export default PostWall