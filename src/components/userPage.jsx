import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {regeneret} from '../features/secretSlice'
import { resetLoginState } from '../features/loginSlice'
import { resetSignupState } from '../features/signupSlice'
import {generateRandomString} from '../utils/createRandomString'
const buttonStyle = {
    height:'30px',
    width:'120px'
}
export default function UserPage({user}){
    const dispatch = useDispatch()
    const usertoStorage = useSelector(state=>state.secret.find(s=>s.uname===user))
    const [secret,setSecret] = React.useState()
    React.useEffect(()=>{
    chrome.storage.sync.get(["user"]).then(result=>setSecret(result.user))
    },[usertoStorage])
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
            <h2>Your secret is {secret?.secret} </h2>
            <div style={{display:'flex',gap:'13px'}}>
             <button
             onClick={async ()=>{
                dispatch(regeneret({
                    user,
                    newSecret:generateRandomString()
                }))
                chrome.storage.sync.set({user:usertoStorage}).then(() => {
                    console.log("Value is set");
                  });
             }}
             style={buttonStyle}>
                Regenerate
             </button>
             <button
             onClick={()=>{
                // dispatch(removeUser(user))
                dispatch(resetLoginState())
                dispatch(resetSignupState())
             }}
             style={buttonStyle}
             >
               logout
             </button>
              
            </div>
        </div>
        </div>
    )
}