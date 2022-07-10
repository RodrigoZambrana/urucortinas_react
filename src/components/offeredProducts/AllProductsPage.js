import React, { useState } from "react";

export default function AllProductsPage() {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Conozca nuestros productos</p>
          <h2>Cortinas y Persianas</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="cortina roller" />
              </div>
              <div className="team-text">
                <h2> Roller</h2>
                <p>Screen y blackout</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Cortinas de Enrollar</h2>
                <p>En PVC y Aluminio</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-3.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Bandas Verticales</h2>
                <p>Variedad de colores</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-4.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Venecianas</h2>
                <p>De aluminio</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-header text-center">
          <h2>Toldos y Cerramientos</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Toldos verticales</h2>
                <p>Manuales o motorizados</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Toldos Zen</h2>
                <p>Toldo Corredizo</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-3.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Toldos de Brazo</h2>
                <p>Varios modelos</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-4.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Cerramientos en PVC</h2>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-header text-center">
          <h2>Servicios</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Motorizaciones</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Reparación y Service</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header text-center">
          <h2>Aberturas en Aluminio y Vidrios</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Serie 20 y 25</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Serie Pobba y Gala</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-4.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Servicio de instalación</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-3.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Vidrios</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
