import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const { API_URL } = import.meta.env;

axios.defaults.baseURL = API_URL;

const setAuthHeader = (access_token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
};

export const login = createAsyncThunk(
  "auth/login ",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("auth/login ", credentials);
      setAuthHeader(data.access_token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
