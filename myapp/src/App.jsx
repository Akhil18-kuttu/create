import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Singup from './components/Singup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Count from './components/Count'
import Buttonchange from './components/Buttonchange'
import Api from './components/Api'
import Pikachu from './components/Pikachu'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <br /><br />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/counters' element={<Count />} />
        <Route path='/namebutton' element={<Buttonchange />} />
        <Route path='/appis' element={<Api />} />
        <Route path='/pokemon' element={<Pikachu />} />
       
      </Routes>
      
  
      
      
      
    </>
  )
}

export default App
