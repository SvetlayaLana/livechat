import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import { rootReducer } from "./root";

const history = createBrowserHistory();

const middlewares = [
  thunkMiddleware,
  routerMiddleware,
];

if(process.env.ENABLE_LOGS)
  middlewares.push(logger);

const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

if(process.env.NODE_ENV !== 'production' && module.hot){
  module.hot.accept('./root', () => store.replaceReducer(rootReducer(history)));
}

export { history };
export default store;
