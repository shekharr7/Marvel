interface appState {
    data: [],
    error: false
}

const initialState: appState = {
    data: [],
    error: false
}

const mainReducer = (state = initialState, action: any) => {
    if (action.type === 'LOAD_DATA') {
        return({
            ...state,
            data: action.data
        })
    } else if (action.type === 'FAILED') {
        return({
            ...state,
            error: action.error
        })
    } else {
        return({
            ...state
        })
    }
}

export default mainReducer;