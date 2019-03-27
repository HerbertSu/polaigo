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

export const updateHRRepVoteHistory = (state = {representativeHRVoteHistory : []}, action) => {
    switch(action.type){
        case 'UPDATE_HR_REP_VOTE_HISTORY' : {
            return {...state, representativeHRVoteHistory : action.payload};
        }
        case 'CLEAR_HR_REP_VOTE_HISTORY' : {
            return {...state, representativeHRVoteHistory : []};
        }
        default : {
            return state;
        };
    };
};