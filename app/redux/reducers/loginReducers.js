export const setUsername = (state = {username : ''}, action) => {
    switch(action.type){
        case 'SET_USERNAME' : {
            return {...state, username : action.payload};
        }
        default : {
            return state;
        };
    };
};

export const setIsLoggedIn = (state = {isLoggedIn : false}, action) => {
    switch(action.type){
        case 'SET_IS_LOGGED_IN' : {
            return {...state, isLoggedIn : action.payload};
        }
        default : {
            return state;
        };
    };
};