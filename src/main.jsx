import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import WomenView from './views/WomenView.jsx'
import Navbar from './component/Navbar.jsx'

import { useState, useEffect } from 'react'
import styled from "styled-components"

const CartContainer = styled.div`
  position: absolute;
  top: 78px;
  right: 100px;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 2px;
  z-index: 10;
  background-color: white;
  border: 1px solid hsl(230.00000000000003, 60.00000000000011%, 98.03921568627452%);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.35);
  height: 200px;
`
const CartHeader = styled.div`
  padding: 2px 10px;
  border-bottom: 1px solid hsl(240, 5.882352941176448%, 90%);
`
const CartTitle = styled.h4`
  font-weight: 700;
  color: #000000c8;
  font-size: 0.8rem;
`
const CartBody = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const CartBodyTxt = styled.h4`
  font-weight: 600;
  color: hsl(217.49999999999997, 5.797101449275362%, 27.058823529411764%);
  font-size: 0.95rem;
`

const NotifTxt = styled.p`
        background-color: hsl(26, 100%, 55%);
        padding: 1px 8px;
        font-size: 0.6rem;
        color: #f5f5f5;
        border-radius: 8px;
        position: absolute;
        top: 20px;
        right: 262px;
    `;

const Layout = () => {

  const [count, setCount] = useState(0)
  const [notif, setNotif] = useState(null)
  const [cartContainer, setCartContainer] = useState(null)

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  const increaseCount = () => setCount(count + 1)

  const setCart = () => {
    if(count > 0){
     setNotif(<NotifTxt>{count}</NotifTxt>) 
    }else{
      setNotif(null)
    }
  }

  const createDefaultContent = () => {
    return(
      <CartBody>
        <CartBodyTxt>Your cart is empty</CartBodyTxt>
      </CartBody>
    )
  }

  const createCartContainer = () => {
    return(
      <CartContainer>
        <CartHeader>
          <CartTitle>Cart</CartTitle>
        </CartHeader>
      {content}
    </CartContainer>
    )
  }

  const [content, setContent] = useState(createDefaultContent())

useEffect(() => {
  if(count > 0){
    setContent("New content")
  }
}, [count])

  const displayCartContainer = () => {
    setCartContainer(createCartContainer());
    console.log('displayCartContainer called'); 
  }

  return (
    <div>
      <Navbar notif={notif} displayCartContainer={displayCartContainer} cartContainer={cartContainer} createDefaultContent={createDefaultContent} />
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
