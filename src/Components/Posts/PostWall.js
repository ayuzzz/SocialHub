import React, {Component} from 'react';
import '../../styles/Posts/posts.css';
import PostArea from '../Posts/PostArea';
import SideMenu from '../Menu/SideMenu';
import {Route} from 'react-router-dom';
import AddPost from '../Posts/AddPost'

class PostWall extends Component{
    render()
    {
        return  <div>
                    <Route exact path="/" render = {() => 
                        (
                            <div className="postwall">
                                <SideMenu/>
                                <PostArea {...this.props}/>
                            </div>
                        )}/>

                    <Route exact path="/AddPost" render = {() => 
                        (
                                <div className="postwall">
                                    <SideMenu/>
                                    <AddPost {...this.props}/>
                                </div>
                        )}/>
                </div>
    }
}

export default PostWall