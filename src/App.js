import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Body from "./components/page/Body";
import Roller from "./components/pages/cortinas/Roller";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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

        <Switch>
          <Route path="/" exact></Route>
          <Route path="/roller">
            <Roller />
          </Route>
        </Switch>

        <Body />
      </div>
    </Router>
  );
}

export default App;
