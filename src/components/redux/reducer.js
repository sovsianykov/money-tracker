import {GET_CURRENCY_RATE} from "./types";


const initialState = {
    rate : 28
}
export  const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_CURRENCY_RATE :
            return {
                ...state, rate: action.payload
            } ;
        default :
            return state;
    }

}