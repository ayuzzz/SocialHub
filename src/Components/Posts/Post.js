import React, {Component} from 'react';
import '../../styles/Posts/posts.css';

class Post extends Component{
    render()
    {
        const today = new Date();
        const dd = today.getDate();        
        const mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        const currentdate = dd+"/"+mm+"/"+yyyy

        const title = "Technology"
        const description = "Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings."
        const imageUrl = "https://businessday.ng/wp-content/uploads/2019/11/Technology-industry-720x430.jpg"
        const postDate = currentdate

        return <div className = "post">
                    <h4 className="post-title">{title}</h4>
                    <p className="post-datetime"><small>{postDate}</small></p>
                    <img src = {imageUrl} className="post-image" alt="post"/>
                    <p className="post-description">{description}</p>
               </div>
    }
}

export default Post