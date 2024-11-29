import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='navbar'>
      <button onClick={() => navigate(-1)}>🔙</button>
      {/* Se podría usar navigate(user.home) donde home es un string = '/home'. el -1 es ir hacia atrás, 1 hacia adelante */}
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>
      {/* <Link to="/beer/:id">
        <h4>Beer</h4>
      </Link> */}
    </nav>
  )
}

export default Navbar