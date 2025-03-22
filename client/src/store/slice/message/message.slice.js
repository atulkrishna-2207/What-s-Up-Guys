import { createSlice } from "@reduxjs/toolkit";
import { getMessageThunk, sendMessageThunk } from "./message.thunk";
const initialState = {
  screenLoading: false,
  buttonLoading: false,
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setNewMessage: (state, action) => {
      state.messages = state.messages || [];
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // send message
    builder.addCase(sendMessageThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      state.messages = [...state.messages, action.payload?.responseData];
      state.buttonLoading = false;
    });
    builder.addCase(sendMessageThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    // get message
    builder.addCase(getMessageThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(getMessageThunk.fulfilled, (state, action) => {
      state.messages = action.payload?.responseData?.messages || [];
      state.buttonLoading = false;
    });
    builder.addCase(getMessageThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });
  },
});

export const { setNewMessage } = messageSlice.actions;

export default messageSlice.reducer;
