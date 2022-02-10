import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CartEmpty } from './cart-empty.svg'
import { ReactComponent as CartFull } from './cart-full.svg'
import { STORAGE_PRODUCTS_CART } from './Constantes'

import './Cart.scss'

export default function Cart(props) {
  const { productsCart, setProductsCart } = useState()
  const [cartOpen, setCartOpen] = useState(false)

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART)
    setProductsCart(idsProducts)
  }

  const openCart = () => {
    setCartOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeCart = () => {
    setCartOpen(false)
    document.body.style.overflow = 'scroll'
  }

  // const emptyCart = () => {
  //   localStorage.removeItem(STORAGE_PRODUCTS_CART)
  //   getProductsCart()
  // }

  return (
    <>
      <div>
        <p>{productsCart}</p>
      </div>
    </>
  )
}
