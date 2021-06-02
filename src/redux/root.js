import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { myReducer,formReducer } from "./MyReducer";
import {fetchRateEpic } from "./actions";

export const rootEpic = combineEpics(
    fetchRateEpic
);

export const rootReducer = combineReducers({
    myReducer,
    formReducer
})