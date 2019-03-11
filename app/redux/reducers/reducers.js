import {combineReducers} from 'redux';

import {
    updateAddressLine1,
    updateAddressLine2,
    updateCity,
    updateZipCode,
    updateState
} from './locationFormReducers';

export default combineReducers({
    addressLine1Reducer : updateAddressLine1,
    addressLine2Reducer : updateAddressLine2,
    cityReducer : updateCity,
    zipCodeReducer : updateZipCode,
    stateReducer : updateState
})