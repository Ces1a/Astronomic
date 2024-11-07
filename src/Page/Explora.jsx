import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Explora = () => {
    const [imagesData, setImagesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("2022-01-01");

    const apiKey = "V1SUZ9nW8DllDfQrtADt7ugTtqucmDhqBjdlWt98";

    const fetchImages = (selectedDate) => {
        setLoading(true);
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`, {
                params: {
                    earth_date: selectedDate,
                    camera: "fhaz",
                    api_key: apiKey
                }
            })
            .then((response) => {
                setImagesData(response.data.photos);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchImages(date);
    }, [date]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    if (loading) return <p class="justify-center items-center text-black">Cargando imágenes...</p>;
    if (error) return <p>Hubo un error al cargar las imágenes: {error.message}</p>;

    return (
        <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <h2 class="text-4xl font-extrabold text-blue-100 mb-2" >Galería de Imágenes de Marte</h2>
            
            <label class="mb-4 text-center">
                Filtrar por fecha:
            </label>
            <input class="mb-6 p-2 rounded bg-gray-800 hover:bg-gray-700 transition text-center" type="date" value={date} onChange={handleDateChange} />

            <div className="image-row">
                {imagesData.slice(0, 5).map((image, index) => (
                    <div className="image-item" key={index}>
                        <img
                            src={image.img_src}
                            alt={`Foto Marte ${index + 1}`}
                            className="hubble-image-img"
                        />
                        <div className="image-info">
                            <p><strong>Rover:</strong> {image.rover.name}</p>
                            <p><strong>Cámara:</strong> {image.camera.full_name}</p>
                            <p><strong>Fecha:</strong> {image.earth_date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="curiosidades-row">
                <ul>
                    <li>
                        <h3>Planetas</h3>
                        <Link to="/Expoplanet">
                            <i className="fa-solid fa-earth-africa"></i>
                        </Link>         
                    </li>
                    <li>
                        <h3>Misiones</h3>
                        <Link to="/Expomisiones">
                            <i className="fa-solid fa-shuttle-space"></i>
                        </Link>
                    </li>
                    <li>
                        <h3>Diviértete</h3>
                        <a href="https://www.nasa.gov/learning-resources/for-students-grades-5-8/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-gamepad"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Explora;
