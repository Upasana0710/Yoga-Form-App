import React from 'react'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import NavBar from './NavBar/NavBar'
import Batches from './components/Batches/Batches'
import UserList from './components/UserList/UserList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/batches'  element = {<Batches/>}/>
          <Route path='/users' element = {<UserList/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App