
  import { createSlice } from '@reduxjs/toolkit';
import { UserList } from '../Data';



  const userSlice = createSlice({
    name: 'users',
    initialState: UserList,
    reducers:{
      addUser: (state, action) => {
      state.push(action.payload);
      },
      updateUser: (state, action) => {
      const {id,userName,email} = action.payload;
      const updateUser = state.find(user => user.id == id);
      if(updateUser){
        updateUser.userName = userName;
        updateUser.email = email;
      }
      },
      deleteUser: (state, action) => {
        const {id} = action.payload;
        const deleteUser = state.find(user => user.id == id);
        if(deleteUser){
          return state.filter((user) => user.id !== id);
        }
       
      },
    },
  });

  export const { addUser, updateUser, deleteUser } = userSlice.actions;
  export default userSlice.reducer;
