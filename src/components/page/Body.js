import React from 'react'
import Carousel from './Carousel'
import OfferedProducts from './OfferedProducts'
import VerVideojuegos from './VerVideojuegos'

// import Budget from "./Budget";
import Budget from './Budget'

import { Helmet } from 'react-helmet'

export default function Body() {
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
      <Budget />
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
