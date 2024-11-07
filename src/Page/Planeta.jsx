import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Agregar iconos para navegación

const Planeta = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [modalImage, setModalImage] = useState(null);
    const [imageIndex, setImageIndex] = useState(0); // Para navegar entre las imágenes en el modal

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await axios.get('https://epic.gsfc.nasa.gov/api/natural/all');
                const availableDates = response.data.map(item => item.date.split(" ")[0]);
                setDates(availableDates);
                setSelectedDate(availableDates[0]); // Para seleccionar la fecha más reciente
            } catch (err) {
                setError("No se pudieron obtener las fechas disponibles.");
            }
        };
        fetchDates();
    }, []);

    useEffect(() => {
        if (!selectedDate) return;

        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://epic.gsfc.nasa.gov/api/natural/date/${selectedDate}`);
                const imagesWithUrls = response.data.map((image) => {
                    const date = image.date.split(" ")[0].replace(/-/g, "/");
                    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date}/jpg/${image.image}.jpg`;
                    return { ...image, imageUrl };
                });
                setImages(imagesWithUrls);
            } catch (err) {
                setError("No se pudo obtener la información de la NASA.");
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [selectedDate]);

    const openModal = (index) => {
        setModalImage(images[index]);
        setImageIndex(index);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const navigateImage = (direction) => {
        let newIndex = imageIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1; // Navegar al final si es el primer índice
        if (newIndex >= images.length) newIndex = 0; // Volver al principio si es el último índice
        setImageIndex(newIndex);
        setModalImage(images[newIndex]);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <h1 className="text-4xl font-extrabold text-blue-100 mb-2">Conoce tu Planeta</h1>
            <p className="transform-text text-white text-2xl">
                Explora imágenes actuales de la Tierra, capturadas en diferentes momentos por la cámara EPIC de la NASA.
            </p>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <label htmlFor="date-select" className="mb-4 text-center">Selecciona una fecha:</label>
            <select
                id="date-select"
                className="mb-6 p-2 rounded bg-gray-800 hover:bg-gray-700 transition text-center"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            >
                {dates.map(date => (
                    <option key={date} value={date}>{date}</option>
                ))}
            </select>

            {loading ? (
                <div className="text-xl text-center">Cargando imágenes...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={image.identifier} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 text-center">
                            <img
                                src={image.imageUrl}
                                alt={`Imagen de la Tierra - ${image.date}`}
                                className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                                onClick={() => openModal(index)} // Abrir modal al hacer clic
                            />
                            <p className="text-sm mb-2"><strong>Fecha:</strong> {image.date}</p>
                            <p className="text-sm mb-2"><strong>Descripción:</strong> {image.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {modalImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-gray-900 p-4 rounded-lg relative text-center max-w-2xl max-h-[80vh] overflow-auto">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
                            <FaTimes />
                        </button>
                        <img
                            src={modalImage.imageUrl}
                            alt={`Imagen ampliada de la Tierra - ${modalImage.date}`}
                            className="max-w-full max-h-[70vh] object-contain"
                        />
                        <p className="text-sm mb-2"><strong>Fecha:</strong> {modalImage.date}</p>
                        <div className="flex items-center justify-center mb-2 text-lg text-yellow-400">
                            <FaClock className="mr-2" />
                            <span>{new Date().toLocaleTimeString()}</span>
                        </div>
                        <p className="text-sm mb-2"><strong>Descripción:</strong> {modalImage.caption}</p>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-xs">
                            <button onClick={() => navigateImage(-1)} className="bg-gray-700 p-2 rounded-full text-white">
                                <FaArrowLeft />
                            </button>
                            <button onClick={() => navigateImage(1)} className="bg-gray-700 p-2 rounded-full text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Planeta;
