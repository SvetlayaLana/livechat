import createAction from '.';
import { redirectTo } from "utils/redirectTo";

export const LOGOUT = createAction('LOGOUT');

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });

  redirectTo('/login');
};
