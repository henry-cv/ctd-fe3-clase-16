import {Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Contacto from "./Contacto";

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/beer/:id"></Route>
      </Routes>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Navbar />
      <Home />
      </>
  );
}

export default App;
