
export const setToast = (messages) => {

    return {
        type: 'TOAST_THROWED',
        payload: messages
    }
}