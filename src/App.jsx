import { useEffect, useState } from 'react'
import SignUp from './components/signup'
import Signin from './components/signin'
import UserPage from './components/userPage'
import { useSelector,used} from 'react-redux'
import './App.css'
function App() {
  const [signedUp,setSignedUp] = useState()
  const [loading,setLoading] = useState(false)
  const [storageChanged,setStorageChanged] = useState()
  const signedupRedux = useSelector(state=>state.signup)
  const loggedin = useSelector(state=>state.login)
  const [loggedinUser,setLoggedinUser] = useState()
  const handleLogin = (loggedinUser)=>{
    setLoggedinUser(loggedinUser)
  }
  chrome.runtime.onMessage.addListener(()=>{
    setStorageChanged(true)
  })
  useEffect(()=>{
    if(!loading){
      setLoading(true)
      chrome.storage.sync.get(["signup"]).then(result=>setSignedUp(result.signup))
    }
    setLoading(false)
  },[storageChanged])
  // console.log(signedupRedux)
  if(loggedin) return  <UserPage   user={loggedinUser}/>
  return (
    <>
    {
      signedUp?<Signin onSignin={handleLogin}/>:<SignUp loading={loading}/>
      
    }
    
    </>
  )
}

export default App
