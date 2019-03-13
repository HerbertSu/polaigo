export const flipShowFormAction = (incomingShowForm) => {
    return {
        type : 'FLIP_SHOW_FORM',
        payload : !incomingShowForm
    };
};