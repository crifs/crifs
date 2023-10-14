export const SET_USER = 'SET_USER';
export const SET_PROGRESS_VALUE = 'SET_PROGRESS_VALUE';


export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const setProgressValue = progressvalue => dispatch => {
    dispatch({
        type: SET_PROGRESS_VALUE,
        payload: progressvalue,
    });
};