import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/login';  // Импортируем thunk

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    // В редукторах можно определять дополнительные действия, если нужно
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.token = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;