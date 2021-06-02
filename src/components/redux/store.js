import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware , compose } from 'redux';
import { rootReducer,rootEpic } from "./root";

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export   const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );

    epicMiddleware.run(rootEpic);
