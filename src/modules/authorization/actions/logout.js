import createAction from '.';

export const LOGOUT = createAction('LOGOUT');

export const logout = () => ({
  type: LOGOUT,
});
