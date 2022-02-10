import React from 'react'
import Constantes from './Constantes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class AgregarVideojuego extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      costo_producto: {
        id: '',
        nombre_producto: '',
        unidad: '',
        precio: '',
      },
    }
    // Indicarle a las funciones a quién nos referimos con "this"
    this.manejarCambio = this.manejarCambio.bind(this)
    this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this)
  }
  render() {
    return (
      <div className="column is-one-third">
        <h1 className="is-size-3">Agregar Producto</h1>
        <ToastContainer></ToastContainer>
        <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
          <div className="form-group">
            <label className="label" htmlFor="id">
              ID Producto:
            </label>
            <input
              autoFocus
              required
              placeholder="ID Producto: "
              type="text"
              id="id"
              onChange={this.manejarCambio}
              value={this.state.costo_producto.id}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="nombre">
              Nombre Producto:
            </label>
            <input
              autoFocus
              required
              placeholder="Nombre Producto: "
              type="text"
              id="nombre_producto"
              onChange={this.manejarCambio}
              value={this.state.costo_producto.nombre_producto}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="unidad">
              Unidad:
            </label>
            <input
              required
              placeholder="Unidad"
              type="number"
              id="unidad"
              onChange={this.manejarCambio}
              value={this.state.costo_producto.unidad}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="Precio">
              Precio:
            </label>
            <input
              required
              placeholder="Precio"
              type="number"
              id="precio"
              onChange={this.manejarCambio}
              value={this.state.costo_producto.precio}
              className="input"
            />
          </div>
          <div className="form-group">
            <button className="button is-success mt-2">Guardar</button>
            &nbsp;
            <Button className="btn btn-custom" type="submit">
              Calcular
            </Button>
          </div>
        </form>
      </div>
    )
  }
  async manejarEnvioDeFormulario(evento) {
    evento.preventDefault()
    // Codificar nuestro videojuego como JSON
    xw
    const cargaUtil = JSON.stringify(this.state.costo_producto)
    // ¡Y enviarlo!
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/guardar_costo_producto.php`,
      {
        method: 'POST',
        body: cargaUtil,
      },
    )
    const exitoso = await respuesta.json()
    if (exitoso) {
      toast('Producto Guardado 🎮', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      this.setState({
        costo_producto: {
          id: '',
          nombre_producto: '',
          unidad: '',
          precio: '',
        },
      })
    } else {
      toast.error('Error guardando. Intenta de nuevo')
    }
  }
  manejarCambio(evento) {
    // Extraer la clave del estado que se va a actualizar, así como el valor
    const clave = evento.target.id
    let valor = evento.target.value
    this.setState((state) => {
      const costoActualizado = state.costo_producto
      // Si es la calificación o el nombre, necesitamos castearlo a entero
      if (clave !== 'nombre') {
        valor = parseFloat(valor)
      }
      // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
      videojuegoActualizado[clave] = valor
      return {
        costo_producto: costoActualizado,
      }
    })
  }
}

export default AgregarVideojuego
