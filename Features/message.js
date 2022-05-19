import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: {
      message: '',
      sentMessages: [],
      receivedMessages: [],
    },
  },
  reducers: {
    changeMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {changeMessage} = messageSlice.actions;
export default messageSlice.reducer;
