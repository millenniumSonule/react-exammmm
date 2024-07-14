import React from 'react'
import './App.css'
import plp from './components/plp'
import cart from './components/cart'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element = {<plp/>} />
        <Route path ='/cart' element = {<cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App