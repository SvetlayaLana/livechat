import createReducer from 'utils/createReducer';
import { LOGIN } from "../actions/login";
import { LOGOUT } from "../actions/logout";

const defaultState = {
  isAuthorized: false,
  userInfo: {
    userName: null,
    isRemembered: false,
  }
};

export default createReducer(defaultState, {
  [LOGIN]: (state, { payload: { userInfo } }) => ({
    ...state,
    isAuthorized: true,
    userInfo: {
      ...userInfo,
    },
  }),
  [LOGOUT]: () => defaultState,
})
