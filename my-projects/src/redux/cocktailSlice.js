import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getCocktailDetail = createAsyncThunk("getCocktailDetail" , async  (searValue , {}) =>{
//    // axios data =================================

//    try {
//        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searValue}`)
//        return response.data.drinks

//    } catch (error) {
//     console.log(error);
    
//    }
// })

export const getCocktailDetail = createAsyncThunk("getCocktailDetail" , async(searValue , {}) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searValue}`);
        return response.data.drinks
    } catch (error) {
        console.log(error);
    }
})
 
export const getoneCocktail = createAsyncThunk("getoneCocktail" , async (id) =>{
   try {
   const respone = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
   return respone.data.drinks[0]
   } catch (error) {
    console.log(error);
    
   }
})
    // =========fetch data =============
    // try {
    // const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    // const data = await response.json()
    // return data.drinks
        
    // } catch (error) {
    //     console.log("error" , error);
    // }




export const cocktailSlice = createSlice({
    name : "cocktail",
    initialState : {
         cocktilDetails : [],
        loading : true,
        oneCocktail : {}
    },
    reducers : {

    },
    extraReducers :{
        // [getCocktailDetail.pending] : (state, action) =>{
        //     state.loading = true
        // },
        // [getCocktailDetail.fulfilled] : (state , action) =>{
        //     state.loading = false
        //     state.cocktilDetails = action.payload
        // },
        // [getCocktailDetail.rejected ] : (state, action) =>{
        //     state.loading = false
        // },

        [getCocktailDetail.pending] : (state,action) => {
            state.loading = true
        },
        [getCocktailDetail.fulfilled] : (state,action) => {
            state.loading= false
            state.cocktilDetails = action.payload;
        },
        [getCocktailDetail.rejected] : (state,action)=> {
            state.loading = false
        },
        [getoneCocktail.pending] : (state , action) =>{
            state.loading = true

        },
        [getoneCocktail.fulfilled] : (state , action) =>{
            state.loading = false
            state.oneCocktail = action.payload

        },
        [getoneCocktail.rejected] : (state , action) =>{
            state.loading = false

        },
    }
})
export default cocktailSlice.reducer