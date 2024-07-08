import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import WomenView from './views/WomenView.jsx'
import Navbar from './component/Navbar.jsx'

const Layout = () => {
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/women",
        element: <WomenView/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
