import { GET_CURRENCY_NOW } from "./types";


const initialState = {
    rate : []
}
export  const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_CURRENCY_NOW :
            return {
                ...state, rate: action.payload
            } ;
        default :
            return state;
    }

}