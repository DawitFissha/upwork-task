import { useEffect, useState } from 'react'
import SignUp from './components/signup'
import Signin from './components/signin'
import UserPage from './components/userPage'
import { useSelector } from 'react-redux'
function App() {
  const signedUp = useSelector(state=>state.signup)
  const loggedin = useSelector(state=>state.login)
  const [loggedinUser,setLoggedinUser] = useState()
  const userSecret = useSelector(state=>state.secret.find(s=>s.uname===loggedinUser)?.secret)
  const handleLogin = (loggedinUser)=>{
    setLoggedinUser(loggedinUser)
  }

  if(loggedin) return  <UserPage  secret = {userSecret} user={loggedinUser}/>
  return (
    <>
    {
      signedUp?<Signin onSignin={handleLogin}/>:<SignUp/>
      
    }
    
    </>
  )
}

export default App
