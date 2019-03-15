export const setShowVotes = (state = {showVotes : false}, action) => {
    switch(action.type){
        case 'SET_SHOW_VOTES' : {
            return {...state, showVotes : action.payload};
        }
        default : {
            return state;
        };
    };
};