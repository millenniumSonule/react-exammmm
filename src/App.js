import React from 'react'
import './App.css'
import Plp from './components/plp'
import Cart from './components/cart'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element = {<Plp/>} />
        <Route path ='/cart' element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App