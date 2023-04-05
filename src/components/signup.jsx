import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {signUp} from '../features/secretSlice'
import { useFormik } from 'formik'
import {generateRandomString} from '../utils/createRandomString'
import {signedUp} from '../features/signupSlice'
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
    else if(!values.confirm_password){
      errors.confirm_password = "required field"
    }
    else if(values.password!==values.confirm_password){
      errors.confirm_password = "passwords don't match"
    }
    return errors
  }
export default function SignUp(){
    const dispatch = useDispatch()
  const formik = useFormik({
  initialValues:{
    uname:'',
    password:"",
    confirm_password:""
  },
  validate,
  onSubmit:(values,{resetForm})=>{
    dispatch(signUp({
      uname:values.uname,
      password:values.confirm_password,
      secret:generateRandomString()
    }))
    resetForm()
    dispatch(signedUp())
  }
})
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
        <h2 style={{alignSelf:'center'}}>SignUp</h2>
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
       <Input
       required
       onChange={formik.handleChange}
       type = "password" name="confirm_password" value={formik.values.confirm_password} id="confirm-password" placeholder="confirm password" />
       <button type='submit' style={{...style,height:'35px'}}>Signup</button>
 
       {formik.errors.confirm_password?
         <h3 style={{...style,color:'red'}}>
           {formik.errors.confirm_password}
         </h3>:null
        }
       </div>
      </form>
     </div>
     
   )
}