import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <Button onClick={notify}>Toast</Button>
      <ToastContainer />
    </div>
  );
}

export default App;
