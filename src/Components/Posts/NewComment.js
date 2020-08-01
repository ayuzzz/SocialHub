import React, {Component} from 'react';
import '../../styles/Posts/posts.css';

class NewComment extends Component{
    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render()
    {
        return <form onSubmit={this.handleSubmit}>
                    <input id = {"newComment"+Number(Date.now())} className="new-comment" type = "text" name = "newComment" placeholder="Add Comment"/>
                    <input type="submit" style={{visibility:"hidden"}} hidefocus="true" />
                </form>
    }

    handleSubmit(event)
    {
        
        event.preventDefault();
        const postId  = this.props.post.id            

        const comment = {
            id : Number(Date.now()),
            commentDate : new Date(),
            comment : event.target.elements.newComment.value,
        }

        event.target.elements.newComment.value = ""
        this.props.addComment(postId, comment)
        

        this.props.History.history.push("/")      
    }
}

export default NewComment