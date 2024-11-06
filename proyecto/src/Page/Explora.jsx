import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Explora = () => {
    const [marsImages, setMarsImages] = useState([]);  // Imágenes de Marte
    const [fireballData, setFireballData] = useState([]); // Datos de fireball
    const apiKey = "V1SUZ9nW8DllDfQrtADt7ugTtqucmDhqBjdlWt98";

    useEffect(() => {
        // Llamada para obtener imágenes del rover en Marte (cámara fhaz)
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`)
            .then(response => {
                setMarsImages(response.data.photos.slice(0, 1));  // Limitar a 1 imagen
            })
            .catch(error => console.error("Error al cargar imágenes de Marte:", error));

    return (
        <section className="explora-section">
            {/* Sección de imágenes de Marte */}
            <div className="mars-gallery">
                <h1>Curiosidades de Marte</h1>
                {marsImages.length > 0 ? (
                    <div className="mars-images">
                        {marsImages.map((image, index) => (
                            <img key={index} src={image.img_src} alt={`Mars Rover ${index}`} className="mars-image" />
                        ))}
                    </div>
                ) : (
                    <p>Cargando imágenes de Marte...</p>
                )}
            </div>
        </section>
    );
};

export default Explora;
