import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Astronomy</h1>
      <p className="mb-6">
        Explora el universo y aprende sobre los planetas, estrellas y mucho más.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Conoce tu Planeta</h2>
          <p>Descubre información fascinante sobre los planetas del sistema solar.</p>
          <NavLink to="/Planeta" className="text-blue-500 hover:text-blue-700">
            Más información
          </NavLink>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Explora el Espacio</h2>
          <p>Sumérgete en el estudio de las estrellas y galaxias lejanas.</p>
          <NavLink to="/Explora" className="text-blue-500 hover:text-blue-700">
            Más información
          </NavLink>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Acerca de Nosotros</h2>
          <p>Conoce más sobre nuestra misión y visión en el campo de la astronomía.</p>
          <NavLink to="/MisionVision" className="text-blue-500 hover:text-blue-700">
            Más información
          </NavLink>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-3xl font-bold">Últimos Artículos</h3>
        <ul className="mt-4">
          <li className="mb-2">
            <NavLink to="/Blog" className="text-blue-500 hover:text-blue-700">
              ¿Qué es un agujero negro?
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/Blog" className="text-blue-500 hover:text-blue-700">
              La historia del telescopio
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/Blog" className="text-blue-500 hover:text-blue-700">
              Misiones espaciales más importantes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
