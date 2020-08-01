import React, {Component} from 'react';
import '../../styles/Posts/posts.css';

class AddPost extends Component{

constructor()
{
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
}

    render()
    {
        console.log(this.props);
        return <div className="AddPost">
                    <h1>Add Post</h1>
                    <form onSubmit={this.handleSubmit}>                        
                        <input id="title" name = "title" type="text" placeholder="Title"/>
                        <input id="imageUrl" name = "imageUrl" type="text" placeholder="Image Url"/>
                        <input id="description" name = "description" type="text" placeholder="Post Description"/><br/>
                        <input style={{marginLeft:"10px"}} className="submit-button" id="submit-button" name="submit-button" type = "submit" value="Add"/>
                    </form>
                </div>
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const post = {
            id : Number(Date.now()),
            title : event.target.elements.title.value,
            description : event.target.elements.description.value,
            imageUrl : event.target.elements.imageUrl.value,
            postDate : new Date()
        }
        this.props.addPost(post)

        //this.props.onHistory.push("/")      
    }

}

export default AddPost