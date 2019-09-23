
const initialState = {
    name: null,
    email: null,
    token: null,
    isLoading: false
}

export default function reducer(state = initialState, action){

    switch(action.type){

        case 'USER_LOGGED_IN':
            return { 
                ...state, 
                name: action.payload.name, 
                email: action.payload.email,
                token: action.payload.token
            };
        break;

        case 'USER_LOGGED_OUT':
            return { ...initialState }
        break;

        case 'LOADING_USER':
            return {
                ...state,
                isLoading: true
            }
        break;

        case 'USER_LOADED':
            return {
                ...state,
                isLoading: false
            }
        break;

        default:
            return state;
        break;
    }
}