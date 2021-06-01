import { ajax } from 'rxjs/ajax';
import {mergeMap,map} from "rxjs/operators";
import {ofType } from "redux-observable"
import {GET_CURRENCY_RATE,GET_CURRENCY_FILLED} from "./types";


const fetchRate = date => ({ type: GET_CURRENCY_RATE, payload: date });
const fetchRateFilled = payload => ({ type: GET_CURRENCY_FILLED, payload });


const fetchRateEpic = action$ => action$.pipe(
    ofType(GET_CURRENCY_RATE),
    mergeMap(action =>
        ajax.getJSON(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${action.payload}`).pipe(
            map(response =>fetchRateFilled(response))
        )
    )
);