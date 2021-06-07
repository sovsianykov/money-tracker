import {ADD_NEW_EXPENSE, GET_CURRENCY_NOW, FORM, REMOVE_EXPENSE, CATEGORY_FILTER, ALL_EXPENSES_SUM} from "./types";



const initialState = {
    rate : [],
    name : '',
    item : '',
    cost : '',
    category :'',
    expenses : [],
    allExpensesSum : 0,
    categorised : [],
    allCategoriesSum : 0,

}
export  const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_CURRENCY_NOW :
            return {
                ...state, rate: action.payload
            }
        case ALL_EXPENSES_SUM :
            return {
                ...state,   allExpensesSum : state.expenses.reduce(function (sum,exp) {
                    return sum + Number(exp.cost)
                },0 )
            }
        case ADD_NEW_EXPENSE :
            return  {
                ...state,expenses: state.expenses.concat([action.payload]),

            }
        case REMOVE_EXPENSE :
            return  {
                ...state,expenses: state.expenses.filter(i => i.id !== action.payload ),
                // allExpensesSum : state.expenses.reduce(function (sum,exp) {
                //     return sum - Number(exp.cost)
                // },0 )
            }
        case CATEGORY_FILTER :
            return  {
                ...state, categorised : state.expenses.filter(i => i.category === action.payload )
            }
        case FORM.NAME :
            return {
                ...state, name : action.payload
            };
        case FORM.ITEM :
            return {
                ...state, item: action.payload
            };
        case FORM.COST :
            return {
                ...state, cost: action.payload
            };
        case FORM.CATEGORY :
            return {
                ...state, category: action.payload
            }
        default :
            return state;
    }
}




