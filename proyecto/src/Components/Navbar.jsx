import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>ASTRONOMY</h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/misionVision">Acerca de Nosotros</NavLink>
          <NavLink to="/planeta">Conoce tu Planeta</NavLink>
          <NavLink to="/explora">Explora el Espacio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
