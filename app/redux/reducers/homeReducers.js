
export const flipShowForm = (state={showForm : false}, action) =>{
    switch(action.type){
        case 'FLIP_SHOW_FORM' : {
            return {...state, showForm : action.payload};
        }
        default : {
            return state;
        }
    }
}