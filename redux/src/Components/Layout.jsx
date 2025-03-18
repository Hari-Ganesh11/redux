import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import './Layout.css' // Import the CSS file

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default Layout