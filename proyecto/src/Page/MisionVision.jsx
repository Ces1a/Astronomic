import React, { useState } from 'react';
import "../../src/App.css"
import cesiaImage from '../assets/img/Cesia.jpg'; 
import wandaImage from '../assets/img/Wanda.jpg';
import katheImage from '../assets/img/Katherine.jpg';

const MisionVision = () => {
    // Estado para almacenar la descripción de la persona seleccionada
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Descripciones de las personas
    const descriptions = {
        cesia: "Cesia es una apasionada de la ciencia y el espacio, siempre está dispuesta a compartir su amor por el conocimiento.",
        wanda: "Wanda es una ingeniera curiosa, siempre dispuesta a resolver problemas con creatividad y pasión.",
        kathe: "Katherine es una líder motivadora, que se inspira en la exploración científica para educar y empoderar a otros."
    };

    // Función para manejar el clic en las imágenes
    const handleImageClick = (person) => {
        setSelectedPerson(descriptions[person]);
    };

    return (
        <div className="mision-vision-container">
            <div className="mision-container">
                <h1>Misión</h1>
                <p>Brindar a los usuarios una experiencia educativa interactiva y 
                    divertida, donde puedan explorar el espacio y aprender sobre el universo, 
                    fomentando la curiosidad científica y el amor por la astronomía,
                    a través de recursos accesibles y emocionantes.</p>
            </div>
            <div className="vision-container">
                <h1>Visión</h1>
                <p>Nuestra visión es brindar un contenido educativo 
                    que inspire y motive a nuestros usuarios a explorar y 
                    aprender más sobre el mundo que nos rodea.</p>
            </div>
            <div className="grupo-imagenes">
                <h2>Equipo</h2>
                <div className="imagenes-container">
                    {/* Aquí las imágenes están configuradas para que, al hacer clic, muestren la descripción */}
                    <img 
                        src={cesiaImage} 
                        alt="Cesia" 
                        className="grupo-imagen" 
                        onClick={() => handleImageClick('cesia')} 
                    />  
                    <img 
                        src={wandaImage} 
                        alt="Wanda" 
                        className="grupo-imagen" 
                        onClick={() => handleImageClick('wanda')} 
                    />
                    <img 
                        src={katheImage} 
                        alt="Katherine" 
                        className="grupo-imagen" 
                        onClick={() => handleImageClick('kathe')} 
                    />
                </div>
                {/* Mostrar la descripción si hay una persona seleccionada */}
                {selectedPerson && (
                    <div className="descripcion-persona">
                        <h3>Descripción:</h3>
                        <p>{selectedPerson}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MisionVision;
