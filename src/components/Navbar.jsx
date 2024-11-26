import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to="/home">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>
      <Link to="/beer/:id">
        <h4>Beer</h4>
      </Link>
    </nav>
  )
}

export default Navbar