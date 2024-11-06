import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/App.css";  // Tu archivo de estilos, si lo tienes

const Explora = () => {
    const [imageOfTheDay, setImageOfTheDay] = useState(null);  // Estado para la imagen del día
    const [loading, setLoading] = useState(true);  // Estado para saber si estamos cargando

    const apiKey = "V1SUZ9nW8DllDfQrtADt7ugTtqucmDhqBjdlWt98";  // Tu clave API de la NASA

    useEffect(() => {
        // Llamada a la API de la Imagen del Día
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(response => {
                setImageOfTheDay(response.data);  // Guardar los datos de la API
                setLoading(false);  // Cambiar el estado de carga a false
            })
            .catch(error => {
                console.error("Error al cargar la imagen del día:", error);
                setLoading(false);  // Asegurarse de que no se quede en estado de carga
            });
    }, []);

    return (
        <section className="explora-section">
            <h1>Imagen del Día de la NASA</h1>
            {loading ? (
                <p>Cargando imagen...</p>  // Mensaje mientras se carga la imagen
            ) : (
                <div className="image-container">
                    <h2>{imageOfTheDay?.title}</h2>
                    <p>{imageOfTheDay?.explanation}</p>
                    <img
                        src={imageOfTheDay?.url}
                        alt={imageOfTheDay?.title}
                        className="image-of-the-day"
                    />
                </div>
            )}
        </section>
    );
};

export default Explora;
