import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import WomenView from './views/WomenView.jsx'
import Navbar from './component/Navbar.jsx'

import { useState, useEffect } from 'react'
import styled from "styled-components"

import thumb from "./assets/image-product-1-thumbnail.jpg"
import del from "./assets/icon-delete.svg"

const CartContainer = styled.div`
  position: absolute;
  top: 78px;
  right: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 2px 0 20px;
  z-index: 10;
  background-color: white;
  border: 1px solid hsl(230.00000000000003, 60.00000000000011%, 98.03921568627452%);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.35);
  height: fit-content;
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

  const CartBodyContentSection = styled.div`
    margin: 10px 0 2px;
    padding: 4px;
    display: flex;
    flex-direction: column;
  `

  const CartBodyDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 18px 15px;
    height: 60%;
  `

  const CartBodyImage = styled.img`
    border-radius: 5px;
    height: 45px;
    width: 45px;
  `

  const CartBodyDetailTxt = styled.p`
    color: #b4b4b4;
    font-size: 0.8rem;
    margin: 0 15px;
    line-height: 22px;
    font-weight: 600;
  `

  const NewPrice = styled.span`
    color: #111111;
    font-weight: 700;
  `
  const CartBodyDel = styled.img`
    height: 15px;
    width: 15px;
  `

  const CartBodyBtn = styled.button`
    width: 90%;
    margin: 0 auto;
    height: 40px;
    background-color: hsl(26, 100%, 55%); 
    border: 1px solid hsl(26, 100%, 55%);
    border-radius: 8px;
    color: black;
    font-weight: 700;
  `

const Layout = () => {

  const [count, setCount] = useState(0)
  const [notif, setNotif] = useState(null)
  const [cartContainer, setCartContainer] = useState(null)

  const price = "120.00"

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

  const createCartContent = () => {
    return(
      <CartBodyContentSection>
        <CartBodyDetails>
          <CartBodyImage src={thumb} alt="product-thumbnail"/>
          <CartBodyDetailTxt>Fall Limited Edition Sneakers ${price} x {count} <NewPrice> ${Number(price) * count}</NewPrice></CartBodyDetailTxt>
          <CartBodyDel src={del} alt="del-icon"/>
        </CartBodyDetails>
        <CartBodyBtn>Checkout</CartBodyBtn>
      </CartBodyContentSection>
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
      setContent(createCartContent)
    }
  }, [count])

  const displayCartContainer = () => {
    if(!cartContainer){
      setCartContainer(createCartContainer());
      setNotif(null)
    }else{
      setCartContainer(null)
    }
    console.log('displayCartContainer called'); 
  }

  return (
    <div>
      <Navbar notif={notif} displayCartContainer={displayCartContainer} cartContainer={cartContainer} createDefaultContent={createDefaultContent} price={price} />
      <Outlet context={{ count, setCount, increaseCount, decreaseCount, setCart, price }} />
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
