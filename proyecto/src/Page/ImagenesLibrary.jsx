import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImagenesLibrary = () => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://images-api.nasa.gov/search?media_type=image');
        setImagenes(response.data.collection.items);
      } catch (err) {
        setError('Error al cargar las imágenes.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Cargando imágenes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {imagenes.map((item, index) => (
        <div key={index} className="border rounded-lg p-2">
          <img
            src={item.links[0].href}
            alt={item.data[0].title}
            className="w-full h-auto rounded"
          />
          <h3 className="mt-2 text-center">{item.data[0].title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImagenesLibrary;

