import {ADD_NEW_EXPENSE, GET_CURRENCY_NOW} from "./types";


const initialState = {
    rate : [],
    expenses : [{ id :1 , name : 'Mary', item : 'book' , cost : 100, category :'education' }]
}
export  const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_CURRENCY_NOW :
            return {
                ...state, rate: action.payload
            }
        case ADD_NEW_EXPENSE :
            return  {
                ...state,expenses: state.expenses.concat(action.payload)
            }
        default :
            return state;
    }

}