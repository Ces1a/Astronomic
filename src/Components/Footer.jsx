import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import logoFinal from '../assets/img/LogoFinal.png';

const Footer = () => {
  // Estado para manejar el mensaje de éxito de suscripción
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault(); // Previene el envío de formulario tradicional
    if (email) {
      setMessage('¡Gracias por suscribirte a nuestro boletín!');
      setEmail(''); // Limpiar el campo de correo electrónico
    } else {
      setMessage('Por favor ingresa un correo válido.');
    }
  };

  return (
    <footer className="bg-[#003b5c] text-white py-10 mt-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Contenedor principal con flexbox para los elementos alineados */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          {/* Sección para logo centrado */}
          <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0">
            <div className="flex-shrink-0">
              <img
                src={logoFinal}
                alt="Logo NASA"
                className="h-24 md:h-32"
                aria-label="Logo NASA"
              />
            </div>
          </div>

          {/* Sección de redes sociales y Acerca de Nosotros (Izquierda) */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-300 transition-colors duration-300"
                aria-label="NASA website"
              >
                <GiEarthAmerica className="mr-2" />
                NASA
              </a>
              <a
                href="https://twitter.com/NASA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-300 transition-colors duration-300"
                aria-label="NASA Twitter"
              >
                <FaTwitter className="mr-2" />
                Twitter
              </a>
              <a
                href="https://www.instagram.com/nasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-300 transition-colors duration-300"
                aria-label="NASA Instagram"
              >
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </div>
            <div>
              <a
                href="/MisionVision"
                className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                Acerca de Nosotros
              </a>
            </div>
          </div>

          {/* Sección de formulario de suscripción (Derecha) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
            <p className="text-lg font-semibold mb-4 text-white text-center md:text-right">
              Suscríbete a nuestro boletín
            </p>
            <form className="flex justify-center md:justify-end items-center w-full max-w-md" onSubmit={handleSubscription}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="p-3 w-64 rounded-l-md text-black"
                required
              />
              <button type="submit" className="bg-yellow-300 text-black p-3 rounded-r-md hover:bg-yellow-400 transition-colors duration-300">
                Suscribirse
              </button>
            </form>
            {/* Mostrar mensaje de éxito o error */}
            {message && <p className="text-yellow-300 mt-2 text-center">{message}</p>}
          </div>
        </div>

        {/* Espacio adicional para una separación visual entre el contenido y el footer */}
        <div className="w-full text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} NASA API. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








