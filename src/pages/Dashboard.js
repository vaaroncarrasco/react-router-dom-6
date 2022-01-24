import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

export const Dashboard = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={ handleClick }>
        Logout
      </button>

      <Link to="welcome">Welcome</Link>
      <Link to="bye">bye</Link>

      {/* dashboard/subroutes are rendered here */}
      <Outlet />
    </div>
  )
}
