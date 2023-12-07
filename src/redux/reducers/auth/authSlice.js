import { currentUser, login, logout, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => initialState)
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.name;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase(state => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const authReducer = authSlice.reducer;
