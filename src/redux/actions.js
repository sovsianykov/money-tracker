import { ajax } from 'rxjs/ajax';
import {mergeMap,map} from "rxjs/operators";
import { ofType } from "redux-observable"
import {
    GET_CURRENCY_RATE,
    GET_CURRENCY_NOW,
    ADD_NEW_EXPENSE,
    FORM,
    REMOVE_EXPENSE,
    CATEGORY_FILTER,
    ALL_EXPENSES_SUM, ALL_CATEGORY_SUM
} from "./types";


export const fetchRate = date => ({ type: GET_CURRENCY_RATE, payload: date });
const fetchRateNow = payload => ({ type: GET_CURRENCY_NOW, payload });


export const fetchRateEpic = action$ => action$.pipe(
    ofType(GET_CURRENCY_RATE),
    mergeMap(action =>
        ajax.getJSON(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${action.payload}&json`).pipe(
            map(response =>fetchRateNow(response[26].rate))

        )
    )
);

export function addExpense(expense) {
    return ({type : ADD_NEW_EXPENSE , payload: expense})
}
export function allSum() {
    return ({type : ALL_EXPENSES_SUM , payload: ''})
}
export function allCategorySum() {
    return ({type : ALL_CATEGORY_SUM , payload: ''})
}
export function removeExpense(id) {
    return ({type : REMOVE_EXPENSE , payload: id})
}
export function filterByParam(param) {
    return ({type : CATEGORY_FILTER , payload: param})
}
export function addName(name) {
    return ({ type : FORM.NAME , payload : name })
}
export function addItem(item) {
    return ({ type : FORM.ITEM , payload : item })
}
export function addCategory(cat) {
    return ({ type : FORM.CATEGORY , payload : cat })
}
export function addCost(cost) {
    return ({ type : FORM.COST , payload : cost })
}
