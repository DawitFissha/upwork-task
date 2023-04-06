import { createSlice } from "@reduxjs/toolkit";
// this state tracks storage changes in chrome and notifies components subscribed to it 
// to rerender
export const storageChangeSlice = createSlice({
    name:'storageChange',
    initialState:false,
    reducers:{
        changed:(state)=>true,
    }
})
export const {changed} = storageChangeSlice.actions
export default storageChangeSlice.reducer