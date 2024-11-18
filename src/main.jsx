import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer" element={<Beer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
