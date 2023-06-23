import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const login = createAsyncThunk("login" , async({formvalue , Navigate}, {dispatch}) => {
    try {
        dispatch(loadingStart())
        const rsponse = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBy_MiaqJCLEboLlceYuzaLeJR1rdPh32A', formvalue);
        if(rsponse === 200) {
            Navigate('/');
            dispatch(successLogin())
        }
    } catch (error) {
        dispatch(logout());
        console.log(error);
    }
}) 



export const authintiSlice = createSlice({
    name :  "auth",
    initialState : {
        loading : false,
        isLogin : false, 
        errormgs : ""
    },
    reducers : {
        loadingStart : (state , action) =>{
           state.loading = true
        },
        successLogin : (state , action) => {
            state.loading = false
            state.isLogin = true
        },
        logout : (state , action) => {
            console.log("error" , action.payload);
            state.loading = false
            state.errormgs = action.payload
        }
         
    }
})

export const {loadingStart, successLogin , logout} = authintiSlice.actions
export default authintiSlice.reducer