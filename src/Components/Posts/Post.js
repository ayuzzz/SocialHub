import React, {Component} from 'react';
import '../../styles/Posts/posts.css';

class Post extends Component{
    render()
    {
        const today = this.props.post.postDate
        const dd = today.getDate();        
        const mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        const currentdate = dd+"/"+mm+"/"+yyyy

        const title = this.props.post.title
        const description = this.props.post.description
        const imageUrl = this.props.post.imageUrl
        const postDate = currentdate

        return <div className = "post">
                    <p className="post-title"><strong>{title}</strong></p>
                    <p className="post-datetime"><small>{postDate}</small></p>
                    <img src = {imageUrl} className="post-image" alt={this.props.post.id}/>
                    <p className="post-description">{description}</p>
               </div>
    }
}

export default Post