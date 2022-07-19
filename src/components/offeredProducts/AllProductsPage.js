import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function AllProductsPage() {
  const cortinas = [
    {
      key: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Cortinas Roller",
      caption: "Screen y Blackout",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: true,
    },
    {
      key: 2,
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      title: "Cortinas de Enrollar",
      caption: "En PVC y Aluminio",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: true,
    },
    {
      key: 3,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Bandas Verticales",
      caption: "Variedad de colores",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: true,
    },
    {
      key: 4,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Venecianas",
      caption: "En aluminio",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
  ];
  const toldos = [
    {
      key: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Toldos verticales",
      caption: "Manuales o motorizados",
      categoria: "cortinas",
      to: "/cortinas/roller",
      main: false,
    },
    {
      key: 6,
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      title: "Toldos Zen",
      caption: "Toldo corredizo",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 7,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Toldos de Brazo",
      caption: "Varios modelos",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 8,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Cerramientos en PVC",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
  ];
  const servicios = [
    {
      key: 9,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Motorizaciones",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 10,
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      title: "Reparacion y Service",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
  ];
  const aberturas = [
    {
      key: 11,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      title: "Serie 20 y 25",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 12,
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      title: "Serie Probba y Gala",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 13,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Servicio de instalación",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
    {
      key: 14,
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      title: "Vidrios",
      caption: "",
      to: "/cortinas/roller",
      categoria: "cortinas",
      main: false,
    },
  ];

  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Conozca nuestros productos</p>
          <h2>Cortinas y Persianas</h2>
        </div>
        <div className="row">
          {cortinas.map((item) => (
            <ProductItem key={item.key} item={item} />
          ))}
        </div>
        <div className="section-header text-center">
          <h2>Toldos y Cerramientos</h2>
        </div>
        <div className="row">
          {toldos.map((item) => (
            <ProductItem key={item.key} item={item} />
          ))}
        </div>
        <div className="section-header text-center">
          <h2>Servicios</h2>
        </div>
        <div className="row">
          {servicios.map((item) => (
            <ProductItem key={item.key} item={item} />
          ))}
        </div>

        <div className="section-header text-center">
          <h2>Aberturas en Aluminio y Vidrios</h2>
        </div>
        <div className="row">
          {aberturas.map((item) => (
            <ProductItem key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
