
const initialState = {
    title: '',
    text: '',
    color: ''
}

export default (state = initialState, action) => {

    switch(action.type){

        case 'TOAST_THROWED':
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text,
                color: action.payload.color
            }

        default:
            return state;
    }
}