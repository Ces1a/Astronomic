import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImagenesLibrary = () => {
  const [images, setImages] = useState([]);
  const API_URL = 'https://images-api.nasa.gov/search'; // Endpoint de búsqueda de imágenes

  useEffect(() => {
    // Obtener las imágenes de la NASA usando la nueva API
    const fetchImages = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: 'space', //personalizar consulta de búsqueda, por ejemplo 'space', 'mars', etc.
            media_type: 'image', // Filtrar solo imágenes
            year_start: '2020', // Limitar el rango de año 
            year_end: '2024', // Limitar el rango de año
          },
        });

        // Los resultados están dentro de `response.data.collection.items`
        const imageData = response.data.collection.items.map(item => ({
          title: item.data[0].title,
          imageUrl: item.links[0].href, // La URL de la imagen
        }));

        setImages(imageData); // Guardamos las imágenes obtenidas en el estado
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-yellow-400 text-center mb-4">
        Galería de Imágenes del Espacio
      </h3>

      {/* Contenedor de imágenes en grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
              <p className="absolute bottom-2 left-2 text-white text-sm font-semibold">{image.title}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center">Cargando imágenes...</p>
        )}
      </div>
    </div>
  );
};

export default ImagenesLibrary;
