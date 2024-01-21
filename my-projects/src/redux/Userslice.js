import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../Data";

 const userslice = createSlice({
    name:"user",
    initialState: Data,
    reducers:{
        addUser : (state , action) => {
            state.push(action.payload)
        },
        deleteUser : (state , action) => {
           const {id} = action.payload
           const deleteuser = state.find(user => user.id == id)
           if(deleteuser){
            return state.filter(user =>  user.id !== id)
           }
        },
        updateuser : (state ,action) => {
            const {id ,userName,email,phone,age} = action.payload
            const updateuser = state.find(user => user.id ==  id)
            if(updateuser){
                updateuser.userName = userName;
                updateuser.email = email;
                updateuser.phone = phone;
                updateuser.age = age
            }
        }
    }
})
export const  {addUser , deleteUser , updateuser}  = userslice.actions;
export default userslice.reducer;
