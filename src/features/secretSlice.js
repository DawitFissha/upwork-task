import { createSlice } from "@reduxjs/toolkit";
export const secretSlice = createSlice({
    name:'secret',
    initialState:[],
    reducers:{
        signUp(state,action){
            state.push(action.payload)
        },
        regeneret(state,action){
        let {newSecret,user} = action.payload
        let existingSecret = state.find(es=>es.uname===user)
        if(existingSecret){
            existingSecret.secret = newSecret
        }
        },
        removeUser:(_)=>[]
        // {
        // let user = action.payload
        // state.filter(s=>s.uname!==user)
        // }
    }
})
export const { signUp,regeneret,removeUser} = secretSlice.actions
export default secretSlice.reducer