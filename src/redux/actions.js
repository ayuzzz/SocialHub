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

export function likePost(postId)
{
    return{
        type : 'LIKE_POST',
        postId : postId
    }
}