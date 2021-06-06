import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware , compose } from 'redux';
import { rootReducer,rootEpic } from "./root";
import { loadState } from "./localStorage";
import { saveState } from "./localStorage";

const persistedState = loadState();
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export   const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );

    epicMiddleware.run(rootEpic);
store.subscribe(() => {
    saveState(store.getState());
});
