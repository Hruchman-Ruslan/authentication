import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login } from "./authOperations";

export interface IAuth {
  user: {
    email: string;
    password: string;
  };
}

const initialState: IAuth = {
  user: { email: "", password: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IAuth>) => {
      state.user = action.payload.user;
    });
  },
});

export default authSlice;
