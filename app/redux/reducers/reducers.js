const initialState = {
    textInput : '',
};

export const logTextInput = (state = initialState, action = {}) => {
    switch(action.type){
        case 'CHANGE_TEXT_INPUT_FIELD':
            return Object.assign({}, state, {textInput : action.payload});
        default:
            return state;
    }
}