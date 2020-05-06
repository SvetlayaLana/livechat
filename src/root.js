import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from 'redux-form';

export const rootReducer = history => combineReducers({
    router: connectRouter(history),
    form: formReducer,
});
