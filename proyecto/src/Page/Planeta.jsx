import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planeta = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await axios.get('https://epic.gsfc.nasa.gov/api/natural/all');
                const availableDates = response.data.map(item => item.date.split(" ")[0]);
                setDates(availableDates);
                setSelectedDate(availableDates[0]);// Para seleccionar la fecha más reciente
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

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Conoce tu Planeta</h1>
            <p className="text-lg mb-8">
                Aquí podrás explorar imágenes actuales de la Tierra tomadas por la cámara EPIC de la NASA.
            </p>

            {error && <p className="text-red-500">{error}</p>}

            <label htmlFor="date-select" className="mb-4">Selecciona una fecha:</label>
            <select
                id="date-select"
                className="mb-6 p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            >
                {dates.map(date => (
                    <option key={date} value={date}>{date}</option>
                ))}
            </select>

            {loading ? (
                <div className="text-xl">Cargando imágenes...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((image) => (
                        <div key={image.identifier} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                            <img
                                src={image.imageUrl}
                                alt={`Imagen de la Tierra - ${image.date}`}
                                className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                                onClick={() => openModal(image)} // Abre el modal al hacer clic
                            />
                            <p className="text-sm mb-2"><strong>Fecha:</strong> {image.date}</p>
                            <p className="text-sm mb-2"><strong>Descripción:</strong> {image.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {modalImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-gray-900 p-4 rounded-lg relative">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-white">Cerrar</button>
                        <img src={modalImage.imageUrl} alt={`Imagen ampliada de la Tierra - ${modalImage.date}`} className="max-w-full max-h-screen" />
                        <p className="text-sm mb-2"><strong>Fecha:</strong> {modalImage.date}</p>
                        <p className="text-sm mb-2"><strong>Descripción:</strong> {modalImage.caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Planeta;
