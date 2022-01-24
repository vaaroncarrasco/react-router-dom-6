import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

export const Navbar = () => {
  return (
    <div>
      <ul>

        <li>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/">Home</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/about">About</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/users">users</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => (isActive ? 'active' : '')} to="/dashboard">dashboard</NavLink>
        </li>

      </ul>
    </div>
  )
}
