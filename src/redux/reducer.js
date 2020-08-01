import posts from '../data/data'

const postReducer = function allposts(state = posts, action)
{
    switch (action.type){
        case 'ADD_POST':
            return [...state, action.post]
        case 'ADD_COMMENT':
            state.map(post => {
                    if(post.id === action.postId)
                    {
                        post.comments.push(action.comment)
                    }
                return state})
        default : return state
    }
}

export default postReducer