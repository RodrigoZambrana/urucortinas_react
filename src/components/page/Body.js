import React from "react";
import Carousel from "./Carousel";
import Budget from "./Budget";

export default function Body() {
  return (
    <>
      {/* <!-- Carousel Start --> */}

      {/* <!-- CSS Libraries --> */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      {/* <!-- Template Stylesheet --> */}
      <link href="css/style.css" rel="stylesheet" />
      <Carousel />
      <div class="team">
        <div class="container">
          <div class="section-header text-center">
            <p>Conozca nuestros productos</p>
            <h2>Cortinas y Persianas</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-2.jpg" alt="cortina roller" />
                </div>
                <div class="team-text">
                  <h2> Roller</h2>
                  <p>Screen y blackout</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-2.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Cortinas de Enrollar</h2>
                  <p>En PVC y Aluminio</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-3.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Bandas Verticales</h2>
                  <p>Variedad de colores</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-4.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Venecianas</h2>
                  <p>De aluminio</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-header text-center">
            <h2>Toldos y Cerramientos</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-1.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Toldos verticales</h2>
                  <p>Manuales o motorizados</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-2.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Toldos Zen</h2>
                  <p>Toldo Corredizo</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-3.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Toldos de Brazo</h2>
                  <p>Varios modelos</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-4.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Cerramientos en PVC</h2>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-header text-center">
            <h2>Aberturas en Aluminio y Vidrios</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-1.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Ventanas</h2>
                  <p></p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-2.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Puertas Exteriores</h2>
                  <p></p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-4.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Puertas Interiores</h2>
                  <p></p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src="img/team-3.jpg" alt="Team Image" />
                </div>
                <div class="team-text">
                  <h2>Vidrios</h2>
                  <p></p>
                  <div class="team-social">
                    <a href="">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End -->

<!-- About Start --> */}
      <div class="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img">
                <img src="img/iconos/mercado-pago.jpg" alt="mercado-pago" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="section-header text-left">
                <p>Pagá de manera fácil y segura</p>
                <h2>Mercado Pago</h2>
              </div>
              <div class="about-content">
                <p>
                  Todas tus compras hasta en 12 cuotas sin recargo. Mercado pago
                  ofrece una forma rápida y fácil de financiar tus compras.
                  Acepta múltiples tarjetas de crédito y te permite pagar en
                  cuotas sin interés!
                </p>
                <ul>
                  <li>
                    <i class="far fa-check-circle"></i>
                    Todas las tarjetas
                  </li>
                  <li>
                    <i class="far fa-check-circle"></i>
                    Hasta 12 cuotas sin recargo.
                  </li>
                  <li>
                    <i class="far fa-check-circle"></i>
                    Fácil y seguro
                  </li>
                </ul>
                <a class="btn btn-custom" href="">
                  Más Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End -->
<!-- Facts Start --> */}
      <div class="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="facts-item">
                <i class="fa fa-user"></i>
                <div class="facts-text">
                  <h3 data-toggle="counter-up">1000</h3>
                  <p>Instalaciones realizadas</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="facts-item">
                <i class="fa fa-users"></i>
                <div class="facts-text">
                  <h3 data-toggle="counter-up">800</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="facts-item">
                <i class="fa fa-map-marker-alt"></i>
                <div class="facts-text">
                  <h3 data-toggle="counter-up">10</h3>
                  <p>Departamentos visitados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End -->

<!-- Service Start --> */}
      <div class="service">
        <div class="container">
          <div class="section-header text-center">
            <p>Servicios</p>
            <h2>Mantenimiento y Reparación de cortinas</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="service-item">
                <i class="flaticon-car-wash-1"></i>
                <h3>Reparación de Cortinas</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                  velit non metus tortor
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="service-item">
                <i class="flaticon-car-wash"></i>
                <h3>Cambio de mecanismos</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                  velit non metus tortor
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="service-item">
                <i class="flaticon-vacuum-cleaner"></i>
                <h3>Mantenimento</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                  velit non metus tortor
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="service-item">
                <i class="flaticon-seat"></i>
                <h3>Motorizaciones</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                  velit non metus tortor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End -->
<!-- Facts Start --> */}
      <div class="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
        <div class="container">
          <div class="row">
            <div class="facts-text col-md-8">
              <h3>Seguínos en nuestras redes sociales</h3>
            </div>
            <div class="facts-social col-md-4">
              <a
                class="btn"
                href="https://www.facebook.com/EC-Construcciones-103392575340442"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btn"
                href="https://www.instagram.com/eyc.construcciones/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="btn"
                href="https://www.youtube.com/channel/UC8S4nfrBraJPWNXaBW_piiQ"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts Start -->
<!-- Testimonial Start --> */}
      <div class="testimonial">
        <div class="container">
          <div class="section-header text-center">
            <p>Nuestros clientes</p>
            <h2>
              A lo largo de años de trabajo hemos logrado la confianza de
              empresas y particulares que ven en nosotros la mejor opción a la
              hora de instalar o reparar sus cortinas. Si sos una empresa no
              dudes consultar por servicios especiales de mantenimiento
              permanente.
            </h2>
          </div>
          <div class="owl-carousel testimonials-carousel">
            <div class="testimonial-item">
              <img src="img/testimonial-1.jpg" alt="Image" />
            </div>
            <div class="testimonial-item">
              <img src="img/testimonial-2.jpg" alt="Image" />
            </div>
            <div class="testimonial-item">
              <img src="img/testimonial-3.jpg" alt="Image" />
            </div>
            <div class="testimonial-item">
              <img src="img/testimonial-4.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      <Budget />

      {/* <!-- JavaScript Libraries --> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>

      {/* <!-- Contact Javascript File --> */}
      <script src="mail/jqBootstrapValidation.min.js"></script>
      <script src="mail/contact.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="js/main.js"></script>
    </>
  );
}
