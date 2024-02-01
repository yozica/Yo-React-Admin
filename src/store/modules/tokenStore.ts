import { createSlice } from "@reduxjs/toolkit";

const tokenStore = createSlice({
  name: "token",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = "";
    },
  },
});

const { setToken, clearToken } = tokenStore.actions;

const reducer = tokenStore.reducer;

export { setToken, clearToken };

export default reducer;
