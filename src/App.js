import React from "react";
import { ToastContainer, toast } from "react-toastify";
import RollerPage from "./components/pages/RollerPage";
import LogoBar from "./components/topBar/LogoBar";
import NavBar from "./components/topBar/NavBar";
import Footer from "./components/footer/Footer";
import MainPage from "./components/pages/MainPage";
import AllProductsPage from "./components/offeredProducts/AllProductsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
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
          <LogoBar />
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/cortinas/roller">
              <RollerPage />
            </Route>
            <Route path="/productos">
              <AllProductsPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
