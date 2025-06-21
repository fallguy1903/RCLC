import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import Home from './home';
import Register from './register';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
