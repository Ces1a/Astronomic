import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi'; 
import logoFinal from '../assets/img/LogoFinal.png';

const Footer = () => {
  return (
    <footer className="bg-[#003b5c] text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-4 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
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
              href="https://www.facebook.com/NASA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-yellow-300 transition-colors duration-300"
              aria-label="NASA Facebook"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </a>
          </div>

          <div className="text-center flex-1 text-xs md:text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} NASA API. Todos los derechos reservados.</p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={logoFinal}
              alt="Logo NASA"
              className="h-24 md:h-32 mx-auto md:mx-0"  // Aumenté el tamaño del logo
              aria-label="Logo NASA"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

