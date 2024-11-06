import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-gradient-to-r from-[#001f3f] via-[#003b5c] to-[#00aaff] p-6 shadow-lg w-full z-10 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-3xl font-extrabold tracking-wide">ASTRONOMY</h1>
        
        {/* Botón de menú hamburguesa */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Enlaces de navegación */}
        <div className={`flex-col lg:flex lg:flex-row lg:items-center ${isOpen ? 'flex' : 'hidden'} lg:block`}>
          <NavLink
            to="/"
            className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'} mx-4`}
          >
            Home
          </NavLink>
          <NavLink
            to="/MisionVision"
            className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'} mx-4`}
          >
            Acerca de Nosotros
          </NavLink>
          <NavLink
            to="/planeta"
            className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'} mx-4`}
          >
            Conoce tu Planeta
          </NavLink>
          <NavLink
            to="/explora"
            className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'} mx-4`}
          >
            Explora el Espacio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'} mx-4`}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
