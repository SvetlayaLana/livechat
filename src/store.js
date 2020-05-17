import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import { rootReducer } from "./root";

const history = createBrowserHistory();

const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

if(process.env.ENABLE_LOGS)
  middlewares.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(...middlewares))
);

if(process.env.NODE_ENV !== 'production' && module.hot){
  module.hot.accept('./root', () => store.replaceReducer(rootReducer(history)));
}

export { history };
export default store;
