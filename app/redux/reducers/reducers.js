import {combineReducers} from 'redux';

import {
    updateAddressLine1,
    updateAddressLine2,
    updateCity,
    updateZipCode,
    updateState,
    updateHRRepresentative,
} from './locationFormReducers';

import {
    setIsLoading, 
    setShowForm,
    setShowHRRep,
} from './homeReducers';

import {
    setShowVotes,
    updateHRRepVoteHistory,
} from './representativeReducers';

export default combineReducers({
    addressLine1Reducer : updateAddressLine1,
    addressLine2Reducer : updateAddressLine2,
    cityReducer : updateCity,
    zipCodeReducer : updateZipCode,
    stateReducer : updateState,
    myHRRepresentativeReducer : updateHRRepresentative,
    setShowFormReducer : setShowForm,
    setIsLoadingReducer : setIsLoading,
    setShowHRRepReducer : setShowHRRep,
    setShowVotesReducer : setShowVotes,
    updateHRRepVoteHistoryReducer : updateHRRepVoteHistory,
});