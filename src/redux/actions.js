export function addPost(post)
{
    return{
        type : 'ADD_POST',
        post : post
    }
}

export function addComment(postId, comment)
{
    return{
        type : 'ADD_COMMENT',
        postId : postId,
        comment : comment
    }
}