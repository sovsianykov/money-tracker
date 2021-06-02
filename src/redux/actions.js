import { ajax } from 'rxjs/ajax';
import {mergeMap,map} from "rxjs/operators";
import { ofType } from "redux-observable"
import {GET_CURRENCY_RATE, GET_CURRENCY_NOW, ADD_NEW_EXPENSE} from "./types";


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

