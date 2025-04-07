import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginSignUp from './pages/LoginSignUp.jsx'
import Landing from './pages/Landing.jsx'
import './App.css'

function App() {
  const [hasLoggedin, handleHasLoggedin] = useState(false);
  return (
    <>{hasLoggedin ? <Landing /> : <LoginSignUp toggleFunc={handleHasLoggedin} />}</>
  )
}

export default App
