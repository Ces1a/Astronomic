import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi'; 
import logoFinal from '../assets/img/LogoFinal.png';

const Footer = () => {
  return (
    <footer className="bg-[#003b5c] text-white py-4 mt-10 relative overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#003b5c"
          d="M0,160L30,149.3C60,139,120,117,180,133.3C240,149,300,203,360,213.3C420,224,480,192,540,181.3C600,171,660,181,720,176.7C780,171,840,149,900,144C960,139,1020,149,1080,160C1140,171,1200,181,1260,176C1320,171,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V160Z"
        />
      </svg>

      <div className="container mx-auto text-center relative z-10">
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
            <p className="mb-2">&copy; {new Date().getFullYear()} NASA API.  Todos los derechos reservados.</p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={logoFinal}
              alt="Logo NASA"
              className="h-16 md:h-16 mx-auto md:mx-0"
              aria-label="Logo NASA"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
