import React, { useState } from 'react';
import videoSrc from '../assets/img/video.mp4'; 
import carrusel from '../assets/img/carrusel1.png';
import carrusel2 from '../assets/img/carrusel2.png';
import carrusel3 from '../assets/img/carrusel3.png';
import carrusel4 from '../assets/img/carrusel4.png';
import carrusel5 from '../assets/img/carrusel5.png';
import img1 from '../assets/img/img1.png';  
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); // Para manejar la imagen actual en el modal

  const images = [
    { src: carrusel, title: '"El poder del progreso" Despliegue de un cohete ', description: 'Un cohete se lanza al espacio, liberando su fuerza y energía para iniciar una misión más allá de la atmósfera terrestre.' },
    { src: carrusel2, title: '"Un espectáculo natural" Aurora boreal ', description: 'Las luces del norte danzan en el cielo, creando una de las vistas más impresionantes de la naturaleza en su forma más pura.' },
    { src: carrusel3, title: '"El sueño cumplido" Astronauta en la luna', description: 'Un astronauta da sus primeros pasos sobre la superficie lunar, marcando un hito en la exploración espacial humana.' },
    { src: carrusel4, title: '"Un destello en el universo" Cometa ', description: 'Un cometa viaja a través de un vasto cielo lleno de estrellas, dejando una estela de luz que cautiva a los observadores.' },
    { src: carrusel5, title: '"Un ciclo celeste" Fases de la luna', description: 'Las diferentes fases de la luna iluminan el cielo nocturno, pasando de nueva a llena en un proceso fascinante y constante.' },
  ];

  const openModal = (index) => {
    setModalContent(images[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setModalContent(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setModalContent(images[prevIndex]);
  };

  return (
    <div className="text-center py-8 px-4 min-h-screen">
      {/* Título y Video */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-700 mb-6 leading-tight animate-text">
        Bienvenido a Astronomy
      </h1>
      <p className="mb-6 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-400 font-semibold">
        Explora el universo y aprende sobre los planetas, estrellas y mucho más.
      </p>
      <div className="flex justify-center mb-8">
        <video width="100%" height="auto" controls loop className="rounded-lg shadow-lg">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Últimos artículos */}
      <div className="mt-10">
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

          {/* Artículo 3 */}
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

      {/* Mosaico de imágenes */}
      <div className="mt-16">
        {/* Título y descripción para el mosaico */}
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-teal-500 mb-4">
          Explora nuestras imágenes del universo
        </h3>
        <p className="text-xl text-gray-500 mb-8 px-4">
          Disfruta de una selección de las imágenes más fascinantes del espacio. Haz clic en cualquiera para obtener más detalles.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer mosaic-image"
              onClick={() => openModal(index)} // Abrir el modal con el índice de la imagen
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-semibold">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre si se hace clic dentro de él
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">{modalContent.title}</h2>
            <img
              src={modalContent.src}
              alt={modalContent.title}
              className="w-full max-h-80 object-contain rounded-lg mb-4" // Cambié el `object-cover` por `object-contain`
            />
            <p className="text-gray-700 text-lg">{modalContent.description}</p>
            
            {/* Botones de navegación */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 cursor-pointer" onClick={prevImage}>
              <button className="text-gray-600 text-3xl hover:text-gray-800">{'<'}</button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 cursor-pointer" onClick={nextImage}>
              <button className="text-gray-600 text-3xl hover:text-gray-800">{'>'}</button>
            </div>

            {/* Botón de Cerrar (con una "X") */}
            <button
              className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-indigo-600"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;







