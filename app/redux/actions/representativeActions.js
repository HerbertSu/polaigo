export const setShowVotesAction = (boolean) => {
    return {
        type : 'SET_SHOW_VOTES',
        payload : boolean
    };
};

export const updateHRRepVoteHistoryAction = (voteHistoryArray) => {
    return {
        type : 'UPDATE_HR_REP_VOTE_HISTORY',
        payload : voteHistoryArray
    };
};

export const clearHRRepVoteHistoryAction = () => {
    return {
        type : 'CLEAR_HR_REP_VOTE_HISTORY',
    };
};

