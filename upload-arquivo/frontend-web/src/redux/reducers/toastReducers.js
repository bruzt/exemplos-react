
const initialState = {
    messages: [{
        title: '',
        text: '',
        color: ''
    }]
}

export default (state = initialState, action) => {

    switch(action.type){

        case 'TOAST_THROWED':
            return {
                ...state,
                messages: [...action.payload.messages]
            }

        default:
            return state;
    }
}