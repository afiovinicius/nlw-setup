import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes/routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { globalStyles } from "./styles/globalStyles";

export default function App() {
  globalStyles();

  return (
    <Router>
      <ToastContainer />
      <MainRoutes />
    </Router>
  );
}
