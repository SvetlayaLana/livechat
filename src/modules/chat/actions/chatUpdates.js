import createAsyncAction from 'utils/createAsyncAction';
import createAction from '.';
import WSClient from '../services/WSClient';

export const WS_CONNECTION = createAsyncAction(createAction('WS_CONNECTION'));
export const WS_ROOM_CONNECTION = createAsyncAction(createAction('WS_ROOM_CONNECTION'));

export const startObservingMessages = () => (dispatch, getState) => {
  const state = getState();
  const contactsList = state.chat.contactsList;
  const master = state.authorization.userInfo.userName;

  WSClient.masterName = master;

  dispatch({
    type: WS_CONNECTION.pending,
  });

  for(let user of contactsList) {

    dispatch({
      type: WS_ROOM_CONNECTION.pending,
      payload: {
        userId: user.id
      },
    });

    WSClient.subscribe(
        user.id,
        () => dispatch({
          type: WS_ROOM_CONNECTION.success,
          payload: {
            userId: user.id,
          }
        }),
        () => dispatch({
          type: WS_ROOM_CONNECTION.failure,
          payload: {
            userId: user.id,
          }
        })
    );
  }

  return dispatch({
    type: WS_CONNECTION.success,
  })
};

export const stopObservingMessages = () => (dispatch, getState) => {
  const contactsList = getState().chat.contactsList;

  for(let user of contactsList) {
    WSClient.unsubscribe(user.id);
  }
};
