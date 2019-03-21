export const setUsernameAction = (text) => {
    return {
        type : 'SET_USERNAME',
        payload : text
    };
};

export const setIsLoggedInAction = (boolean) => {
    return {
        type : 'SET_IS_LOGGED_IN',
        payload : boolean
    };
};