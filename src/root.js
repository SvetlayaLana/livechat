import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from "redux-persist";

import persistConfig from 'persistConfig';
import authorization from 'modules/authorization/reducers';

export const rootReducer = history => persistCombineReducers(persistConfig, {
    router: connectRouter(history),
    form: formReducer,
    authorization,
});
