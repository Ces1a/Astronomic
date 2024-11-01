import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi'; 

const Footer = () => {
  return (
    <footer className="bg-[#003b5c] text-white py-4 mt-10 relative">
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 240">
        <path fill="#003b5c" d="M0,96L30,106.7C60,117,120,139,180,160C240,181,300,203,360,213.3C420,224,480,224,540,202.7C600,181,660,139,720,117.3C780,96,840,96,900,106.7C960,117,1020,139,1080,144C1140,149,1200,139,1260,144C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V96Z"></path>
      </svg>
      <div className="container mx-auto text-center relative z-10">
        <p className="mb-2">&copy; {new Date().getFullYear()} NASA API. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-yellow-300 transition-colors duration-300"
          >
            <GiEarthAmerica className="mr-2" />
            NASA
          </a>
          <a
            href="https://twitter.com/NASA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter className="mr-2" />
            Twitter
          </a>
          <a
            href="https://www.facebook.com/NASA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFacebook className="mr-2" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


