import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#003b5c] text-white py-4 mt-10 relative">
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path fill="#003b5c" d="M0,192L30,213.3C60,235,120,277,180,288C240,299,300,277,360,245.3C420,213,480,171,540,138.7C600,107,660,85,720,90.7C780,96,840,128,900,138.7C960,149,1020,139,1080,128C1140,117,1200,107,1260,128C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V192Z"></path>
      </svg>
      <div className="container mx-auto text-center relative z-10">
        <p className="mb-2">&copy; {new Date().getFullYear()} NASA API. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
            NASA
          </a>
          <a href="https://twitter.com/NASA" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
            Twitter
          </a>
          <a href="https://www.facebook.com/NASA" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;