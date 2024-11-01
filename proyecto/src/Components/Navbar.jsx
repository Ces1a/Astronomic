import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo8.png'; // Importa el logo desde assets

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#001f3f] via-[#003b5c] to-[#00aaff] p-6 shadow-lg w-full z-10 flex items-center" style={{ height: '80px' }}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <img src={logo} alt="Logo" className="h-24 mr-4" /> {/* Ajusta la altura aquí */}
          <h1 className="text-white text-3xl font-extrabold tracking-wide">ASTRONOMY</h1>
        </div>
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/MisionVision"
            className={({ isActive }) =>
              `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`
            }
          >
            Acerca de Nosotros
          </NavLink>
          <NavLink
            to="/planeta"
            className={({ isActive }) =>
              `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`
            }
          >
            Conoce tu Planeta
          </NavLink>
          <NavLink
            to="/explora"
            className={({ isActive }) =>
              `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`
            }
          >
            Explora el Espacio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
