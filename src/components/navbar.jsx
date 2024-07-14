import React from 'react'
import { NavLink } from 'react-router-dom';
import './comp.css'
const navbar = () => {
  return (
    <div className="nav-bar-cointainer">
        <ul className='nav-items'>
            <li><NavLink exact to="/" activeClassName="active">Homepage</NavLink></li>
            <li><NavLink exact to="/cart" activeClassName="active">Cart</NavLink></li>
        </ul>
    </div>
  )
}

export default navbar