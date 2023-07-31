import { createSlice } from "@reduxjs/toolkit";

const themSlice = createSlice({
  name:"theme",
  initialState:{
    themeMode : 'light'
  },
  reducers:
  {
    toogleTheme : (state) => {
        state.themeMode = state.themeMode  === "light" ? "dark" : "light";
    }
  }

})
export const {toogleTheme} = themSlice.actions
export default  themSlice.reducer;