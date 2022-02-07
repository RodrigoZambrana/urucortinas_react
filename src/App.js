import React from "react";
import Header from "./components/page/Header";
import Footer from "./components/page/Footer";
import Body from "./components/page/Body";
import useFetch from "./hooks/useFetch";
import { url_json_costos } from "./utils/variables";

function App() {
  const getCostosProductos = useFetch(url_json_costos);
  console.log(getCostosProductos);

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
