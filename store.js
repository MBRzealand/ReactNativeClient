import reduxWebsocket from '@giantmachines/redux-websocket';
import {configureStore} from '@reduxjs/toolkit';

import messageReducer from './Features/message';
import logger from 'redux-logger';

const websocketMiddleware = reduxWebsocket({
  onOpen: (socket: WebSocket) => {
    // @ts-ignore
    window.__socket = socket;
  },
  dateSerializer: date => date.toISOString(),
  deserializer: JSON.parse,
});

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger, websocketMiddleware),
});

export default store;
