import { 
    SET_USER, SET_PROGRESS_VALUE, 
} from './action';

const initialState = {
    user: null,
    progressvalue: 1
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload};
        case SET_PROGRESS_VALUE: 
            return {...state, progressvalue: action.payload};
        default:
            return state;
    }
}

export default appReducer;