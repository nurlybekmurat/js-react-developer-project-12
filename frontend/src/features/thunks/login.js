import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { saveAuthToken } from '../utils/loginHelper';

export const login = createAsyncThunk(
  'login/loginAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/v1/login`, { username: 'admin', password: 'admin' });
      saveAuthToken(response.data.token)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);