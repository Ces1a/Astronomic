import React from 'react';
import videoSrc from '../assets/img/video.mp4';
import img1 from '../assets/img/img1.png';  
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';

const Home = () => {
  return (
    <div className="text-center py-8 px-4 min-h-screen"> {/* Eliminado bg-gray-900 */}
      {/* Título con gradiente y efecto de animación "escribiendo" */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-700 mb-6 leading-tight animate-text">
        Bienvenido a Astronomy
      </h1>

      {/* Texto destacado para "Explora el universo" */}
      <p className="mb-6 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-400 font-semibold">
        Explora el universo y aprende sobre los planetas, estrellas y mucho más.
      </p>

      {/* Video centrado y en bucle */}
      <div className="flex justify-center mb-8">
        <video 
          width="80%"  // se ajusto el tamaño del video 
          height="auto" 
          controls
          loop  //  el video se repita indefinidamente
          className="rounded-lg shadow-lg"
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>

      {/* Sección de Artículos */}
      <div className="mt-10">
        {/* Título "Últimos Artículos" con estilo azul oscuro */}
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-600 mb-6">
          Últimos Artículos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Artículo 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="mb-4">
              <img src={img1} alt="Artículo 1" className="w-16 h-16 rounded-full mx-auto mb-4"/>
            </div>
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">
              <a 
                href="https://science.nasa.gov/universe/stars/nasa-funded-study-explores-turbulence-in-molecular-clouds/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                NASA-funded study explores turbulence in molecular clouds
              </a>
            </h4>
            <p className="text-gray-400 mb-4">
              Un estudio financiado por la NASA explora la turbulencia en las nubes moleculares, un fenómeno fundamental para la formación de estrellas.
            </p>
          </div>

          {/* Artículo 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="mb-4">
              <img src={img2} alt="Artículo 2" className="w-16 h-16 rounded-full mx-auto mb-4"/>
            </div>
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">
              <a 
                href="https://science.nasa.gov/missions/hubble/nasas-hubble-webb-probe-surprisingly-smooth-disk-around-vega/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                NASA's Hubble and Webb probe surprisingly smooth disk around Vega
              </a>
            </h4>
            <p className="text-gray-400 mb-4">
              Las observaciones del telescopio Hubble y Webb revelan un disco sorprendentemente suave alrededor de la estrella Vega, desafiando las expectativas.
            </p>
          </div>

          {/* Artículo 3*/}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="mb-4">
              <img src={img3} alt="Artículo 3" className="w-16 h-16 rounded-full mx-auto mb-4"/>
            </div>
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">
              <a 
                href="https://science.nasa.gov/solar-system/comets/nov2024-night-sky-notes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                Nov 2024 Night Sky Notes: Comet Viewing Opportunities
              </a>
            </h4>
            <p className="text-gray-400 mb-4">
              Observaciones sobre el cielo nocturno de noviembre de 2024, incluyendo oportunidades para ver cometas y otros eventos astronómicos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
