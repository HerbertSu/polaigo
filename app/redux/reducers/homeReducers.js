export const setShowForm = (state={showForm : false}, action) => {
    switch(action.type){
        case 'SET_SHOW_FORM' : {
            return {...state, showForm : action.payload};
        }
        default : {
            return state;
        };
    };
};

export const setIsLoading = (state={isLoading : false}, action) => {
    switch(action.type){
        case 'SET_IS_LOADING' : {
            return {...state, isLoading : action.payload};
        }
        default : {
            return state;
        };
    };
};

export const setShowHRRep = (state={showHRRep : false}, action) => {
    switch(action.type){
        case 'SET_SHOW_HR_REP' : {
            return {...state, showHRRep : action.payload};
        }
        default : {
            return state;
        };
    };
};