import React from "react";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-contact">
                <h2>Información de contacto</h2>
                <p>
                  <i className="fa fa-map-marker-alt"></i>
                  Montevideo, Uruguay
                </p>
                <p>
                  <i className="fa fa-phone-alt"></i>
                  097 365 931
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  ventas@urucortinas.com.uy
                </p>
                <div className="footer-social">
                  <a
                    className="btn"
                    href="https://www.facebook.com/urucortinas"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn"
                    href="https://www.youtube.com/channel/UCoH1AM4QG3iTettyVnkGDUA"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn"
                    href="https://www.instagram.com/urucortinas_uy/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* <a className="btn" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-link">
                <h2>Enlaces de Interés</h2>
                <a href="">Sobre Nostros</a>
                <a href="">Contacto</a>
                <a href="">Productos</a>
                {/* <a href="">Tienda</a> */}
                <a href="">Servicios</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>
            &copy;
            <a href="#">www.urucortinas.com.uy</a>, All Right Reserved. Designed
            By
            <a href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
      </div>
    </>
  );
}
