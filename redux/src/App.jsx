import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Nav from './Components/Nav'
import Layout from './Components/Layout' // Import the Layout component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'user', element: <Users /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
