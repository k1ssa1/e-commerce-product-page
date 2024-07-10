import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import WomenView from './views/WomenView.jsx'
import Navbar from './component/Navbar.jsx'

import { useState } from 'react'
import styled from "styled-components"

const NotifTxt = styled.p`
        background-color: hsl(26, 100%, 55%);
        padding: 1px 8px;
        font-size: 0.6rem;
        color: #f5f5f5;
        border-radius: 8px;
        position: absolute;
        top: 29px;
        right: 284px
    `;

const Layout = () => {

  const [count, setCount] = useState(1)

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  const increaseCount = () => setCount(count + 1)

  const [notif, setNotif] = useState(null)

  const setCart = () => {
    if(count > 0){
     setNotif(<NotifTxt>{count}</NotifTxt>) 
    }else{
      setNotif(null)
    }
  }


  return (
    <div>
      <Navbar notif={notif} />
      <Outlet context={{ count, setCount, increaseCount, decreaseCount, setCart }} />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/women",
        element: <WomenView />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
