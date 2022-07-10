import React from "react";
import { ToastContainer, toast } from "react-toastify";
import RollerPage from "./components/page/RollerPage";
import { Helmet } from "react-helmet";
import LogoBar from "./components/topBar/LogoBar";
import NavBar from "./components/topBar/NavBar";
import Footer from "./components/footer/Footer";
import Main from "./components/page/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <LogoBar />
        <NavBar />
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

          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/cortinas/roller">
              <RollerPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
