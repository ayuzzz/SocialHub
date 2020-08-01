import posts from '../data/data'

const postReducer = function allposts(state = posts, action)
{
    switch (action.type){
        case 'ADD_POST':
            return [...state, action.post]
        default : return state
    }
}

export default postReducer