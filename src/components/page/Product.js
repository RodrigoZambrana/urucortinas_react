import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "./Constantes";

export default function Product(props) {
  const { producto, addProductCart } = props;

  return (
    <Col className="product">
      <Card>
        <Card.Img
          variant="top"
          src={`${BASE_PATH}/img/presupuesto_img/${producto.ruta_imagen}`}
        />
        <Card.Body>
          <Card.Title>{producto.nombre_producto}</Card.Title>
          <Card.Text>
            Medidas: {producto.ancho.toFixed(2)}x{producto.alto.toFixed(2)}
          </Card.Text>
          <Card.Text>
            Costo: {producto.precio.toFixed(2)} USD / Unidad
          </Card.Text>
          <Button onClick={() => addProductCart(producto)}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
