import React from "react";
import Constantes from "./Constantes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilaDeTablaDeVideojuego from "./FilaDeTablaDeVideojuego";
class VerVideojuegos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costos_productos: [],
    };
  }
  async componentDidMount() {
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/obtener_costos_productos.php`
    );
    const costos_productos = await respuesta.json();
    this.setState({
      costos_productos: costos_productos,
    });
  }
  render() {
    return (
      <div className="testimonial">
        <div className="container">
          <div className="column">
            <h1 className="is-size-3">Costos Productos</h1>
            <ToastContainer></ToastContainer>
          </div>
          <div className="table-container">
            <table className="table is-fullwidth is-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Unidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {this.state.costos_productos.map((costo_producto) => {
                  return (
                    <FilaDeTablaDeVideojuego
                      key={costo_producto.id}
                      costo_producto={costo_producto}
                    ></FilaDeTablaDeVideojuego>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default VerVideojuegos;
