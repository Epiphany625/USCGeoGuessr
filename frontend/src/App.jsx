import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginSignUp from './pages/LoginSignUp.jsx'
import Landing from './pages/Landing.jsx'
import './App.css'

function App() {
  const [hasLoggedin, handleHasLoggedin] = useState(false);
  const [userInfo, setUserInfo] = useState({}); 
  return (
    <>
    {hasLoggedin ? <Landing userInfo={userInfo}/> : <LoginSignUp toggleFunc={handleHasLoggedin} setUserInfo={setUserInfo} />}
    </>
  )
}

export default App
