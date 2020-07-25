import React, {Component} from 'react';
import TiTleBar from './TitleBar/TitleBar'
import PostWall from './Posts/PostWall';

class Main extends Component{
    render()
    {
        return <div>
                    <TiTleBar/>
                    <PostWall/> 
                </div>       
    }
}

export default Main
