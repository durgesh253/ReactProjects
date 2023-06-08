import { createSlice } from "@reduxjs/toolkit";
import imag1 from "./car1.jpg"
import imag2 from "./car2.jpg"

const profileslice = createSlice({
    name : "profile",
    initialState : {
        name:"Durgesh",
        address : "Mumbai",
        image : imag1
    },
    reducers :{
        changename : (state) =>{
            state.name = "jadhav"
            state.image = imag2
        }

    }
})
export const {changename} = profileslice.actions
export default profileslice.reducer