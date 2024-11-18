import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/beer">Beer</Link>
      </nav>
    </div>
  );
}

export default App;
