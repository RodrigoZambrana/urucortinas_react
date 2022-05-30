import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/page/Footer";
import BasePage from "./components/basePage/BasePage";

function App() {
  return (
    <div className="App">
      <BasePage />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
      <Footer />
    </div>
  );
}

export default App;
