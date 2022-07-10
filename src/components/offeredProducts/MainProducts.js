import React from "react";
import { Link } from "react-router-dom";

export default function OfferedProducts() {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Conozca nuestros productos y servicios</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-2.jpg" alt="cortina roller" />
              </div>
              <div className="team-text">
                <h2>Cortinas Roller</h2>
                <p>Screen y blackout</p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
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
          <div className="col-lg-4 col-md-6">
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
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Ventanas</h2>
                <p></p>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-3.jpg" alt="Team Image" />
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
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src="img/team-4.jpg" alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>Mantenimiento y reparación</h2>
                <div className="team-social">
                  <a href="">
                    <i className="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div align="center">
          <Link className="btn btn-custom" to="/productos">
            Todos los productos y servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
