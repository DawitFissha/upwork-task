import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import {loggedIn} from '../features/loginSlice'
const Input = (props)=>{
    const style = {marginLeft:'15px',marginRight:"15px",marginTop:"10px",height:'25px',borderRadius:'5px'}
        return <input style={style} {...props}/>
      }
  const style = {marginLeft:'15px',marginRight:"15px",marginTop:"10px"}
const validate = (values)=>{
    const errors  = {}
    if(!values.uname){
      errors.uname = "required field"
    }
    else if(!values.password){
      errors.password = "required field"
    }
    return errors
  }
export default function Signin({onSignin}){
const [signinError,setSigninError] = useState()
const [user,setUser] = useState()
const dispatch = useDispatch()
  // const secretData = useSelector(state=>state.secret)
  const handleSignin = (uname,password)=>{
    // let user = secretData.find(sd=>sd.uname===uname)
    if(!user){
        setSigninError('User not registered') 
        return
    }
    if(password!==user.password){
        setSigninError('Password incorrect') 
        return
    }
    dispatch(loggedIn())
    onSignin(uname)
  }
  const formik = useFormik({
  initialValues:{
    uname:'',
    password:"",
  },
  validate,
  onSubmit:(values,{resetForm})=>{
    handleSignin(values.uname,values.password)
    resetForm()
  }
})
useEffect(()=>{
  chrome.storage.sync.get(["user"]).then(result=>setUser(result.user))
},[])
    return (
    
        <div style={{
       display:'flex',
       justifyContent:'center',
       marginTop:'100px'
     }}>
      <form onSubmit={formik.handleSubmit}>
      <div style={{
         display:'flex',
         flexDirection:'column',
         // border:'solid 1px black',
         width:'500px',
         paddingBottom:'10px'
         // height:'500px'
       }}>
        <h2 style={{alignSelf:'center'}}>Signin</h2>
        <Input
         required
         type="text" name ="uname" value = {formik.values.uname} 
         id="uname" placeholder="User name"
         onChange={formik.handleChange}
         />
       <Input 
       required
       onChange={formik.handleChange}
       type="password" name="password" value = {formik.values.password} id="password" placeholder="Password"/>
       <button type='submit' style={{...style,height:'35px'}}>Signin</button>
         <h3 style={{...style,color:'red'}}>
           {signinError}
         </h3>
        
       </div>
      </form>
     </div>
     
   )
}