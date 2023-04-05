import { configureStore } from '@reduxjs/toolkit'
import secretReducer from './features/secretSlice'
import signupReducer from './features/signupSlice'
import loginReducer from './features/loginSlice'
export default configureStore({
  reducer: {
    secret: secretReducer,
    signup:signupReducer,
    login:loginReducer
  }
})