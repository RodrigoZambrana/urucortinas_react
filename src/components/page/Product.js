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
          src={`${BASE_PATH}/img/presupuesto_img/${producto.imagen}`}
        />
        <Card.Body>
          <Card.Title>{producto.nombre_producto}</Card.Title>
          <Card.Text>{producto.precio} $ / Unidad</Card.Text>
          <Button
            onClick={() =>
              addProductCart(producto.id, producto.nombre_producto)
            }
          >
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
