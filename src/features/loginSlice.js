import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name:'signup',
    initialState:false,
    reducers:{
        loggedIn:(state)=>true,
        resetLoginState:(state)=>false
    }
})
export const {loggedIn,resetLoginState} = loginSlice.actions
export default loginSlice.reducer