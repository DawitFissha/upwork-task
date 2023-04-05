import * as React from 'react'
import { useDispatch } from 'react-redux'
import {regeneret,removeUser} from '../features/secretSlice'
import { resetLoginState } from '../features/loginSlice'
import { resetSignupState } from '../features/signupSlice'
import {generateRandomString} from '../utils/createRandomString'
import {getSecretFromChrome} from '../popup'
const buttonStyle = {
    height:'30px',
    width:'120px'
}
export default function UserPage({user,secret}){
    const dispatch = useDispatch()
    return(
        <div
        style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'100px'
        }}
        >
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <h2>Your secret is {secret} </h2>
            <div style={{display:'flex',gap:'13px'}}>
             <button
             onClick={()=>{
                dispatch(regeneret({
                    user,
                    newSecret:generateRandomString()
                }))
               
             }}
             style={buttonStyle}>
                Regenerate
             </button>
             <button
             onClick={()=>{
                dispatch(removeUser(user))
                dispatch(resetLoginState())
                dispatch(resetSignupState())
             }}
             style={buttonStyle}
             >
               logout
             </button>
                <p>
                    {/* { getSecretFromChrome() } */}
                    </p>
            </div>
        </div>
        </div>
    )
}