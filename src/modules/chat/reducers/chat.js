import createReducer from 'utils/createReducer';
import { LOGOUT } from "modules/authorization/actions/logout";
import { requestStatuses } from "../constants/requestStatuses";
import { wsStatuses } from "../constants/wsStatuses";
import { WS_CONNECTION, WS_ROOM_CONNECTION } from "../actions/chatUpdates";

const contactsMock = [
  {
    id: 1,
    fullName: 'Svitlana Ternopolska',
  },
  {
    id: 2,
    fullName: 'Nasha Tonkoshkurova',
  },
  {
    id: 3,
    fullName: 'Tetiana Martynova',
  },
  {
    id: 4,
    fullName: 'Valik',
  }
];

const defaultState = {
  requestStatus: requestStatuses.default,
  contactsList: contactsMock,
  chatRooms: {},
  currentChat: {
    userId: null,
    messages: [],
  },
};

export default createReducer(defaultState, {
  [WS_CONNECTION.pending]: (state) => ({
    ...state,
    requestStatus: requestStatuses.pending,
  }),
  [WS_CONNECTION.success]: (state) => ({
    ...state,
    requestStatus: requestStatuses.success,
  }),
  [WS_CONNECTION.failure]: (state) => ({
    ...state,
    requestStatus: requestStatuses.failure,
  }),

  [WS_ROOM_CONNECTION.pending]: (state, { payload: { userId } }) => ({
    ...state,
    chatRooms: {
      ...state.chatRooms,
      [userId]: {
        connectionStatus: wsStatuses.connecting,
        messages: []
      }
    }
  }),
  [WS_ROOM_CONNECTION.success]: (state, { payload: { userId } }) => ({
    ...state,
    chatRooms: {
      ...state.chatRooms,
      [userId]: {
        connectionStatus: wsStatuses.open,
        messages: []
      }
    }
  }),
  [WS_ROOM_CONNECTION.failure]: (state, { payload: { userId } }) => ({
    ...state,
    chatRooms: {
      ...state.chatRooms,
      [userId]: {
        connectionStatus: wsStatuses.closed,
        messages: []
      }
    }
  }),

  [LOGOUT]: () => defaultState,
});
