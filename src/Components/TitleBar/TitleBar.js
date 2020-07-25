import React, {Component} from 'react';
import TitleUser from './Title-User';

class TitleBar extends Component{
    render() {
        return <div className="titlebar">
                    <TitleUser/>
               </div>
    }
}

export default TitleBar