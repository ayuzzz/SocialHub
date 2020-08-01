import React, {Component} from 'react';
import '../../styles/Menu/menu.css';
import {Link} from 'react-router-dom';

class SideMenu extends Component{
    render()
    {
        return <div className = "sidemenu">
                    <Link to="#"><button className="sidemenu-item"> My Profile</button></Link><hr></hr>
                    <Link to="/AddPost"><button className="sidemenu-item"> Add Post</button></Link><hr></hr>
                    <Link to="/"><button className="sidemenu-item"> All Posts</button></Link><hr></hr>
                    <Link to="#"><button className="sidemenu-item"> Sign out</button></Link><hr></hr>
               </div>
    }
}

export default SideMenu