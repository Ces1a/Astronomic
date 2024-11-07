import React, { useState } from 'react';
import "../../src/App.css";
import cesiaImage from '../assets/img/Cesia.jpg'; 
import wandaImage from '../assets/img/Wanda.jpg';
import katheImage from '../assets/img/Katherine.jpg';
import logo from '../assets/img/logofinal.png';  // Importando el logo

const MisionVision = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [showModal, setShowModal] = useState(false); // Estado para manejar el modal

    const descriptions = {
        cesia: {
            name: "Cesia",
            description: "Cesia es una apasionada de la ciencia y el espacio, siempre está dispuesta a compartir su amor por el conocimiento.",
            additionalInfo: "A lo largo de su carrera, Cesia ha liderado proyectos educativos sobre astronomía y tecnología, inspirando a miles de estudiantes a mirar hacia el cielo con curiosidad.",
            image: cesiaImage
        },
        wanda: {
            name: "Wanda",
            description: "Wanda es una ingeniera curiosa, siempre dispuesta a resolver problemas con creatividad y pasión.",
            additionalInfo: "Con un enfoque en la resolución de problemas y la innovación, Wanda ha desarrollado proyectos tecnológicos en el campo de la exploración espacial.",
            image: wandaImage
        },
        kathe: {
            name: "Katherine",
            description: "Katherine es una líder motivadora, que se inspira en la exploración científica para educar y empoderar a otros.",
            additionalInfo: "Katherine ha trabajado en diversas organizaciones científicas, donde ha brindado charlas educativas y ha formado a futuros científicos.",
            image: katheImage
        }
    };

    const handleImageClick = (person) => {
        setSelectedPerson(descriptions[person]);
        setShowModal(true);  // Mostrar el modal cuando se haga clic
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div
            className="mision-vision-container p-8"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #003b5c, #001f2d)', // Igual que el fondo del blog
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10">
                {/* Logo en la parte superior */}
                <div className="logo-container flex justify-start items-center mb-12">
                    <img src={logo} alt="Logo" className="w-52 h-auto mr-8" />
                    <div className="mision-vision-header text-left">
                        <h1 className="text-4xl font-extrabold text-blue-100 mb-2">Misión y Visión</h1>
                        <p className="text-lg text-blue-200">Transformando la exploración espacial en una experiencia educativa única.</p>
                    </div>
                </div>

                {/* Contenedor para Misión y Visión lado a lado */}
                <div className="flex justify-between gap-8 mb-12">
                    {/* Contenedor para Misión */}
                    <div className="mision-container bg-white p-6 rounded-xl shadow-lg flex-1 hover:shadow-2xl transition-all duration-300">
                        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-4 drop-shadow-lg">Misión</h2>
                        <p className="text-lg leading-relaxed text-blue-900 text-justify">
                            Brindar a los usuarios una experiencia educativa interactiva y divertida, donde puedan explorar el espacio y aprender sobre el universo, 
                            fomentando la curiosidad científica y el amor por la astronomía, a través de recursos accesibles y emocionantes.
                        </p>
                    </div>
                
                    {/* Contenedor para Visión */}
                    <div className="vision-container bg-white p-6 rounded-xl shadow-lg flex-1 hover:shadow-2xl transition-all duration-300">
                        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-4 drop-shadow-lg">Visión</h2>
                        <p className="text-lg leading-relaxed text-blue-900 text-justify">
                            Nuestra visión es brindar un contenido educativo que inspire y motive a nuestros usuarios a explorar y aprender más sobre el mundo que nos rodea.
                            A través de la integración de tecnología y aprendizaje interactivo, buscamos que nuestros usuarios desarrollen una profunda pasión por la ciencia y el espacio.
                        </p>
                    </div>
                </div>

                {/* Sección del Equipo */}
                <div className="grupo-imagenes mb-12 text-center">
                    <h2 className="text-5xl font-semibold mb-6 text-white">Nuestro Equipo</h2>
                    <div className="imagenes-container flex justify-center gap-8">
                        {/* Imágenes de los miembros del equipo */}
                        <img 
                            src={cesiaImage} 
                            alt="Cesia"
                            className="grupo-imagen w-40 h-40 object-cover rounded-full cursor-pointer transform transition duration-300 hover:scale-105"
                            onClick={() => handleImageClick('cesia')}
                        />  
                        <img 
                            src={wandaImage} 
                            alt="Wanda"
                            className="grupo-imagen w-40 h-40 object-cover rounded-full cursor-pointer transform transition duration-300 hover:scale-105"
                            onClick={() => handleImageClick('wanda')}
                        />
                        <img 
                            src={katheImage} 
                            alt="Katherine"
                            className="grupo-imagen w-40 h-40 object-cover rounded-full cursor-pointer transform transition duration-300 hover:scale-105"
                            onClick={() => handleImageClick('kathe')}
                        />
                    </div>
                </div>

                {/* Modal para mostrar la descripción del miembro */}
                {showModal && selectedPerson && (
                    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div 
                            className="modal-content p-8 rounded-lg max-w-lg w-full relative"
                            style={{
                                backgroundColor: '#add8e6', // Aplicamos el mismo azul claro
                                color: '#333333',  // Un color de texto oscuro para contrastar con el fondo claro
                            }}
                        >
                            <button
                                onClick={closeModal}
                                className="close-button absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full"
                            >
                                X
                            </button>
                            <div className="flex justify-center mb-4">
                                <img
                                    src={selectedPerson.image}
                                    alt={selectedPerson.name}
                                    className="w-32 h-32 object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-center text-dark-blue mb-4">{selectedPerson.name}</h3>
                            <p className="text-lg text-dark-blue mb-4 text-justify">{selectedPerson.description}</p>
                            <p className="text-md text-dark-blue text-justify">{selectedPerson.additionalInfo}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MisionVision;
