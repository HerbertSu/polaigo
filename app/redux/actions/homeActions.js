export const setShowFormAction = (boolean) => {
    return {
        type : 'SET_SHOW_FORM',
        payload : boolean
    };
};

export const setIsLoadingAction = (boolean) => {
    return {
        type : 'SET_IS_LOADING',
        payload : boolean
    };
};

export const setShowHRRepAction = (boolean) => {
    return {
        type : 'SET_SHOW_HR_REP',
        payload : boolean
    };
};