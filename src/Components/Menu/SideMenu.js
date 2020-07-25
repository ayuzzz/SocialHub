import React, {Component} from 'react';
import '../../styles/Menu/menu.css';

class SideMenu extends Component{
    render()
    {
        return <div className = "sidemenu">
                    <button href="" className="sidemenu-item"> My Profile</button><hr></hr>
                    <button href="#" className="sidemenu-item"> Add Post</button><hr></hr>
                    <button href="#" className="sidemenu-item"> All Posts</button><hr></hr>
                    <button href="#" className="sidemenu-item"> Sign out</button>
               </div>
    }
}

export default SideMenu