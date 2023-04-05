import { createSlice } from "@reduxjs/toolkit";
export const signupSlice = createSlice({
    name:'signup',
    initialState:false,
    reducers:{
        signedUp :(state)=>true,
        resetSignupState:(state)=>false
    }
})
export const {signedUp,resetSignupState} = signupSlice.actions
export default signupSlice.reducer