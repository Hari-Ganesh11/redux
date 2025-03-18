import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav>
        <h1>nav bar</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/user">Users</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>

        </ul>
      </nav>

    </>
  )
}

export default Nav
