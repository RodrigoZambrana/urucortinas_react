import VerVideojuegos from './VerVideojuegos'
import Cart from './Cart'
import React, { useState, useEffect } from 'react'
import { STORAGE_PRODUCTS_CART } from './Constantes'
import Budget from './Budget'

import { Helmet } from 'react-helmet'

export default function Body(props) {
  const { productsCart, getProductsCart, products, addProductCart } = props

  return (
    <>
      {/* <!-- Carousel Start --> */}
      {/* <!-- CSS Libraries --> */}
      <Helmet>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/lib/flaticon/font/flaticon.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        {/* <!-- Template Stylesheet --> */}
        <link href="/css/style.css" rel="stylesheet" />
      </Helmet>
      {/* <Carousel /> */}
      {/* <OfferedProducts /> */}
      <Cart productsCart={productsCart} getProductsCart={getProductsCart} />

      <Budget addProductCart={addProductCart} />
      {/* contenedor del form de presupuesto */}
      <VerVideojuegos />
      {/* Testimonial End */}
      {/* Calcular presupuesto */}
      {/* <!-- JavaScript Libraries --> */}
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="../../../lib/easing/easing.min.js"></script>
        <script src="../../../lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="../../../lib/waypoints/waypoints.min.js"></script>
        <script src="../../../lib/counterup/counterup.min.js"></script>
        {/* <!-- Contact Javascript File --> */}
        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>
        {/* <!-- Template Javascript --> */}
        {window.location.origin + '/js/main.js'}
        <script src="/js/main.js"></script>
      </Helmet>
    </>
  )
}
