export const updateAddressLine1Action = (text) => {
    return {
        type : 'UPDATE_ADDRESS_LINE_1',
        payload : text
    };
};

export const updateAddressLine2Action = (text) => {
    return {
        type : 'UPDATE_ADDRESS_LINE_2',
        payload : text
    };
};

export const updateCityAction = (text) => {
    return {
        type : 'UPDATE_CITY',
        payload : text
    };
};

export const updateZipCodeAction = (text) => {
    return {
        type : 'UPDATE_ZIP_CODE',
        payload : text
    };
};

export const updateStateAction = (text) => {
    return {
        type : 'UPDATE_STATE',
        payload : text
    };
};