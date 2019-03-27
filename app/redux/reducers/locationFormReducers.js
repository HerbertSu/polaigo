export const updateAddressLine1 = (state = {addressLine1 : ''}, action = {}) => {
    switch(action.type){
        case 'UPDATE_ADDRESS_LINE_1':
            return Object.assign({}, state, {addressLine1 : action.payload});
        default:
            return state;
    }
}

export const updateAddressLine2 = (state = {addressLine2 : ''}, action = {}) => {
    switch(action.type){
        case 'UPDATE_ADDRESS_LINE_2':
            return Object.assign({}, state, {addressLine2 : action.payload});
        default:
            return state;
    }
}

export const updateCity = (state = {city : ''}, action = {}) => {
    switch(action.type){
        case 'UPDATE_CITY':
            return Object.assign({}, state, {city : action.payload});
        default:
            return state;
    }
}

export const updateZipCode = (state = {zipCode : ''}, action = {}) => {
    switch(action.type){
        case 'UPDATE_ZIP_CODE':
            return Object.assign({}, state, {zipCode : action.payload});
        default:
            return state;
    }
}

export const updateState = (state = {state : ''}, action = {}) => {
    switch(action.type){
        case 'UPDATE_STATE':
            return Object.assign({}, state, {state : action.payload});
        default:
            return state;
    }
}

const initialHRRepresentativeState = {
    empty : true,
    bioguideid : '',
    firstname : '',
    lastname : '',
    party : '',
    state : '',
};

export const updateHRRepresentative = (state = initialHRRepresentativeState, action) => {
    switch(action.type){
        case 'UPDATE_HR_REPRESENTATIVE' : {
            return {...state, ...action.payload, empty: false};
        } 
        case 'CLEAR_HR_REPRESENTATIVE' : {
            return {...state, ...initialHRRepresentativeState};
        }
        default : {
            return state;
        };
    };
};
