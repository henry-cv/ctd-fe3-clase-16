import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
