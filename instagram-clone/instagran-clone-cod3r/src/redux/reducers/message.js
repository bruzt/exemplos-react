

const initialState = {
    title: '',
    text: ''
}

export default reducer = (state = initialState, action) => {
    
    switch(action.type){

        case 'SET_MESSAGE':
            
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text
            }
        break;

        default:
            return state;
        break;
    }
}