import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { BASE_PATH } from './Constantes'

export default function Product(props) {
  const { producto, addProductCart } = props

  return (
    <Col className="product">
      <Card>
        <Card.Img
          variant="top"
          src={`${BASE_PATH}/img/presupuesto_img/${producto.imagen}`}
        />
        <Card.Body>
          <Card.Title>{producto.nombre_producto}</Card.Title>
          <Card.Text>
            {producto.ancho}x{producto.alto}
          </Card.Text>
          <Card.Text>{producto.precio} USD / Unidad</Card.Text>
          <Button onClick={() => addProductCart(producto)}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
