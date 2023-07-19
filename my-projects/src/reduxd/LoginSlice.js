import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getLocalStorage () {
  const islogin = localStorage.getItem("login")

  if (islogin){
    return true
  }
  else{
    return false
  }
}
export const login = createAsyncThunk("login", async ({navigate, formValue }, { dispatch }) => {
  try {
    dispatch(startLoading());
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALCvX4cRstpp6h_5kA0ZV05Kt1xhmPERM",
      formValue
    );
    if (response.status === 200) {
      navigate("/");
      dispatch(loginSuccess());
    }
  } catch (error) {
    console.log(error);
  }
});

export const loginSlice = createSlice({
  name: "log",
  initialState: {
    isLoading: false,
    isLogin: getLocalStorage(),
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem("login" , true)
      state.isLogin = true;
      state.isLoading = false;
    },
    logout: (state, action) => {
      localStorage.removeItem("login")
      state.isLogin = false;
    },
  },
});

export const { startLoading, loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;
