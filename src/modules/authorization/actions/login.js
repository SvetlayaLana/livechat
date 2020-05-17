import createAction from '.';
import { redirectTo } from "utils/redirectTo";

export const LOGIN = createAction('LOGIN');

export const authorize = () => (dispatch, getState) => {
  const { login, remembered } = getState().form.login.values;

  dispatch({
    type: LOGIN,
    payload: {
      userInfo: {
        userName: login,
        isRemembered: remembered,
      }
    }
  });

  redirectTo('/chat');
};
