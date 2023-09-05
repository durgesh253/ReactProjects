import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginDetails = createAsyncThunk('loginDetails' , async () => {
    
     try {
        
     } catch (error) {
        
     }
})

export const loginslice = createSlice({
    name : 'login',
    initialState : {
        loading : false,
        islogin : true

    },
    reducers:{
        startloading : (state ,action) => {
            state.loading = true
        },
        loginsucess : (state , action) => {
            state.islogin = true
            state.loading = false
        }
    }
})

export const {startloading, loginsucess} =  loginslice.actions
export default loginslice.reducer