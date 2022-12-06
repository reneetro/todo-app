import {ADD_LIST} from '../actions'

export const initialState = {
  lists: [],
  lifeTasks: [],
}

const reducer = (state, action) => {
     switch(action.type) {
         case(ADD_LIST):
         state.lists.push(action.payload)
            return({
                ...state,
                lists: state.lists
             });

    //     case():
    //         return ({ 
    //             ...state, 
    //             total: calculateResult(state.total, action.payload, state.operation)
    //         });
        
    //     case():
    //         return ({
    //             ...state,
    //             operation: action.payload
    //         });

    //     case():
    //         return ({
    //             ...state,
    //             total: 0
    //         });

    //     case(SET_MEMORY):
    //         return({
    //             ...state,
    //             memory: state.total
    //         });
    //     case(APPLY_MEMORY):
    //         return({
    //             ...state,
    //             total: state.memory
    //         });
    //     case(CLEAR_MEMORY):
    //         return({
    //             ...state,
    //             memory: 0
    //         })
       default:
            return state;
    }
}

export default reducer;
