import {createSlice} from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connected: false,
    messages: [],
    url: null,
  },
  reducers: {
    reduxWebsocketConnect: (state, action) => {
      return {
        ...state,
        url: action.payload.url,
      };
    },
    reduxWebsocketOpen: (state, action) => {
      return {
        ...state,
        connected: true,
      };
    },

    reduxWebsocketClosed: (state, action) => {
      return {
        ...state,
        connected: false,
      };
    },
    reduxWebsocketMessage: (state, action) => {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            data: action.payload.message,
            origin: action.payload.origin,
            timestamp: action.meta.timestamp,
            type: 'INCOMING',
          },
        ],
      };
    },
  },
});

export const getConnected = (state: State) => state.connected;

export const {
  reduxWebsocketConnect,
  reduxWebsocketOpen,
  reduxWebsocketClosed,
  reduxWebsocketMessage,
} = connectionSlice.actions;

export default connectionSlice.reducer;
