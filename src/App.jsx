import { Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";

function App() {

  return (
    <>
      <Navbar />
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
        {/* El parametro :id, siempre va luego de una dirección estática, para no causar conflictos con el Page Not Found */}
        <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;