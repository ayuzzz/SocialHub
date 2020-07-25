import React, {Component} from 'react';
import '../../styles/TitleBar/titlebar.css';
import avatar from '../../images/avatar.png'
import logo from '../../images/logo.png'

class TitleUser extends Component{

    render(){
        let userName = "Unknown User";

        return <div style={{height:"100%"}}>
                    <img src = {logo} className = "titlebar-logo" alt = "logo"/>
                    <h3 className = "titlebar-sitename">SOCIAL HUB </h3>
                    <h4 className = "titlebar-username">{userName} </h4>
                    <img src={avatar} className="titlebar-image" alt = "profile"/>                    
                </div>
    }
}

export default TitleUser