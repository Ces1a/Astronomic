import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Explora = () => {
    const [marsImages, setMarsImages] = useState([]);  // Imágenes de Marte
    const [asteroids, setAsteroids] = useState([]);    // Lista de asteroides cercanos
    const [missionDesign, setMissionDesign] = useState(null);  // Diseño de misión de cuerpos pequeños

    const apiKey = "V1SUZ9nW8DllDfQrtADt7ugTtqucmDhqBjdlWt98";

    useEffect(() => {
        // 1. Llamada para imágenes del rover en Marte (cámara fhaz)
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`)
            .then(response => setMarsImages(response.data.photos.slice(0, 1))) // Limitar a 1 imágenes
            .catch(error => console.error("Error al cargar imágenes de Marte:", error));

        // 2. Llamada para recuperar una lista de asteroides cercanos en un rango de fechas
        const startDate = "";
        const endDate = "";
        axios.get(`https://api.nasa.gov/neo/rest/v1/${apiKey}`)
            .then(response => setAsteroids(Object.values(response.data.near_earth_objects).flat().slice(0, 2))) // Limitar a 5 asteroides
            .catch(error => console.error("Error al cargar la lista de asteroides:", error));

        // 3. Llamada para diseño de misión de cuerpos pequeños (Small-Body Mission Design)
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/`)
            .then(response => setMissionDesign(response.data))
            .catch(error => console.error("Error al cargar el diseño de misión de cuerpos pequeños:", error));
    }, []);

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
                ) : <p>Cargando imágenes de Marte...</p>}
            </div>

            {/* Sección de asteroides cercanos a la Tierra */}
            <div className="asteroids-list">
                <h1>Asteroides Cercanos a la Tierra</h1>
                {asteroids.length > 0 ? (
                    <ul>
                        {asteroids.map((asteroid, index) => (
                            <li key={index}>
                                <p>Nombre: {asteroid.name}</p>
                                <p>Distancia a la Tierra: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
                            </li>
                        ))}
                    </ul>
                ) : <p>Cargando asteroides...</p>}
            </div>

            {/* Sección de diseño de misión de cuerpos pequeños */}
            <div className="mission-design">
                <h1>Diseño de Misión de Cuerpos Pequeños</h1>
                {missionDesign ? (
                    <pre>{JSON.stringify(missionDesign, null, 2)}</pre>
                ) : <p>Cargando diseño de misión...</p>}
            </div>
        </section>
    
    );
};

export default Explora;
