import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Body from "./components/page/Body";

function App() {
  return (
    <div className="App">
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
      <Body />
    </div>
  );
}

export default App;
