import React from "react";
import { toast } from "react-toastify";
import Constantes from "./Constantes";
class FilaDeTablaDeVideojuego extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Si han eliminado este juego, no necesitamos mostrarlo
      eliminado: false,
    };
    console.log(this.props.costo_producto);
    // this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this)
    // this.eliminar = this.eliminar.bind(this)
  }
  // redireccionarParaEditar() {
  //   return <Redirect to={`/videojuegos/editar/${this.props.videojuego.id}`} />
  // }
  // async eliminar() {
  //   const resultado = await Swal.fire({
  //     title: 'Confirmación',
  //     text: `¿Eliminar "${this.props.videojuego.nombre}"?`,
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3298dc',
  //     cancelButtonColor: '#f14668',
  //     cancelButtonText: 'No',
  //     confirmButtonText: 'Sí, eliminar',
  //   })
  //   // Si no confirma, detenemos la función
  //   if (!resultado.value) {
  //     return
  //   }
  //   const respuesta = await fetch(
  //     `${Constantes.RUTA_API}/eliminar_videojuego.php?id=${this.props.videojuego.id}`,
  //     {
  //       method: 'DELETE',
  //     },
  //   )
  //   const exitoso = await respuesta.json()
  //   if (exitoso) {
  //     toast('Videojuego eliminado ', {
  //       position: 'top-left',
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     })
  //     this.setState({
  //       eliminado: true,
  //     })
  //   } else {
  //     toast.error('Error eliminando. Intenta de nuevo')
  //   }
  // }
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
        <td>{this.props.costo_producto.imagen}</td>

        <td></td>
        <td>
          {/* <button onClick={this.eliminar} className="button is-danger">
            Eliminar
          </button> */}
        </td>
      </tr>
    );
  }
}

export default FilaDeTablaDeVideojuego;