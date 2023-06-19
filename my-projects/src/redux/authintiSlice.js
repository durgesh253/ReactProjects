import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login" , async({formvalue}) => {
    try {
        const rsponse = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBy_MiaqJCLEboLlceYuzaLeJR1rdPh32A', formvalue);
        console.log(rsponse);
    } catch (error) {
        console.log(error);
    }
}) 



export const authintiSlice = createSlice({
    name :  "auth",
    initialState : {
        isLogin : false
    },
    reducers : {
        
    }
})
export default authintiSlice.reducer