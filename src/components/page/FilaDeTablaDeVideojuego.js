import React from "react";
class FilaDeTablaDeVideojuego extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Si han eliminado este juego, no necesitamos mostrarlo
      eliminado: false,
    };
  }

  render() {
    if (this.state.eliminado) {
      return null;
    }
    return (
      <tr>
        <td>{this.props.costo_producto.id}</td>
        <td>{this.props.costo_producto.nombre_producto}</td>
        <td>{this.props.costo_producto.unidad}</td>
        <td>{this.props.costo_producto.precio}</td>
        <td>{this.props.costo_producto.costo_instalacion}</td>
        <td>{this.props.costo_producto.ruta_imagen}</td>

        <td></td>
        <td></td>
      </tr>
    );
  }
}

export default FilaDeTablaDeVideojuego;
