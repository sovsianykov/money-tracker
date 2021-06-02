import { ADD_NEW_EXPENSE, GET_CURRENCY_NOW,FORM } from "./types";



const initialState = {
    rate : [],
    expenseForm : {  nameF : '', itemF : '' , costF : 0 , categoryF :'' },
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
export  const formReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FORM.NAME :
            return {
                ...state, nameF: action.payload
            };
        case FORM.ITEM :
            return {
                ...state, itemF: action.payload
            };
        case FORM.COST :
            return {
                ...state, costF: action.payload
            };
        case FORM.CATEGORY :
            return {
                ...state, categoryF: action.payload
            }

        default :
            return state;
    }
}