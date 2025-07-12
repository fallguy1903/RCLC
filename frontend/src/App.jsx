import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import Home from './home';
import Register from './register';
import BloodRequest from './bloodRequest';
import MakeRequest from './makeRequest';
import Feedback from './feedback';
import ShowFeedback from './showFeedback';
import Events from './events';
import CreateEvent from './createEvent';
import Manage from './Manage';
import EditUser from './editUser';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/bloodRequest' element={<BloodRequest/>}></Route>
        <Route path='/makeRequest' element={<MakeRequest/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/showFeedback' element={<ShowFeedback/>}></Route>
        <Route path='/events' element={<Events/>}></Route>  
        <Route path='/createEvent' element={<CreateEvent/>}></Route>  
        <Route path='/manage' element={<Manage/>}></Route>  
        <Route path='/editUser/:id' element={<EditUser/>}></Route>  
      </Routes>
    </Router>
  )
}

export default App
