import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function MainProducts() {
  const data = [
    {
      key: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Cortinas Roller",
      caption: "Screen y Blackout",
    },
    {
      key: 2,
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      title: "Cortinas de Enrollar",
      caption: "En PVC y Aluminio",
    },
    {
      key: 3,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Bandas Verticales",
      caption: "Variedad de colores",
    },
    {
      key: 8,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Cerramientos en PVC",
      caption: "",
    },
    {
      key: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      title: "Motorizaciones",
      caption: "",
    },
    {
      key: 6,
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      title: "Mantenimiento y reparación",
      caption: "",
    },
    {
      key: 5,
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      title: "Ventanas",
      caption: "",
    },
    {
      key: 14,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Vidrios",
      caption: "",
    },
  ];

  return (
    <div className="team">
      <div className="container-fluid">
        <div className="section-header text-center">
          <p>Conozca nuestros productos y servicios</p>
        </div>
        <div className="row">
          {data.map((item) => (
            <ProductItem key={item.key} item={item} />
          ))}
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
