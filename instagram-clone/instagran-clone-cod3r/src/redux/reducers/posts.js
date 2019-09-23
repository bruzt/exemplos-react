
const initialState = {
    posts: [],
    isUploading: false,
    loading: false,
    page: 0,
    totalPages: 1,
    postsPerPage: 5
}

export default postsReducer = (state = initialState, action) => {

    switch(action.type){

        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            }

        case 'ADD_COMMENT':
            
            return {
                ...state,
                posts: state.posts.map( (post) => {

                    if(post.id === action.payload.postId){

                        if(post.comments){

                            post.comments = post.comments.concat(action.payload.comment);

                        } else {

                            post.comments = [action.payload.comment]
                        }
                    }

                    return post;
                })
            }

        case 'CREATING_POST':
            return {
                ...state,
                isUploading: true
            }

        case 'POST_CREATED':
            return {
                ...state,
                isUploading: false
            }

        case 'PAGE_NUMBER':
            return {
                ...state,
                page: action.payload
            }

        case 'SET_TOTAL_PAGES':
                return {
                    ...state,
                    totalPages: action.payload
                }

        default:
            return state;
    }
}