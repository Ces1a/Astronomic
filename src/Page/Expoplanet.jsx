import React, { useState } from 'react';
import '../../src/App.css/'
import saturno from '../assets/img/saturno.jpg';
import jupiter from '../assets/img/jupiter.jpg';
import neptuno from '../assets/img/neptuno.jpg';
import urano from '../assets/img/urano.jpg';
import ceres from '../assets/img/ceres.jpg';
import Eris from '../assets/img/Eris.jpg';
import haumea from '../assets/img/haumea.jpg';
import Makemake from '../assets/img/makemake.jpg';
import pluto from '../assets/img/pluto.jpg';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegación

const curiosidades = [
    { imgSrc: urano, descripcion: 'Jupiter is the largest planet in our solar system  if it were a hollow shell, 1,000 Earths could fit inside.' },
    { imgSrc: saturno, descripcion: 'Saturn is the sixth planet from the Sun, the second-largest planet in our solar system.' },
    { imgSrc: jupiter, descripcion: 'The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system' },
    { imgSrc: neptuno, descripcion: 'Neptune is the eighth and most distant planet in our solar system.' },
    { imgSrc: ceres, descripcion: 'Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter, and its the only dwarf planet located in the inner solar system' },
    { imgSrc: pluto, descripcion: 'Pluto was long considered our solar systems ninth planet. But it was reclassified as a dwarf planet in 2006 by the International Astronomical Union' },
    { imgSrc: haumea, descripcion: 'Haumea was nicknamed Santa by one discovery team. It is oval-shaped, and is one of the fastest rotating large objects in our solar system.' },
    { imgSrc: Makemake, descripcion: 'Makemake is slightly smaller than Pluto, and is the second-brightest object in the Kuiper Belt, while Pluto is the brightest.' },
    { imgSrc: Eris, descripcion: 'The discovery of Eris helped trigger a debate in the scientific community that led to the decision to clarify the definition of a planet.' },
];

const ExploraCuriosidades = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate(); // Instanciamos el hook de navegación

    const handleImageClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <div className="explora-curiosidades">
            <h1>Explora Curiosidades Espaciales</h1>
            {/* Botón para volver atrás */}
            <button onClick={() => navigate(-1)} className="boton-atras">
            <i class="fa-solid fa-rotate-left"></i>
            </button>
            <div className="lista-curiosidades">
                {curiosidades.map((item, index) => (
                    <div className="curiosidad-item" key={index}>
                        <img
                            src={item.imgSrc}
                            alt={`Curiosidad ${index + 1}`}
                            className="curiosidad-imagen"
                            onClick={() => handleImageClick(index)}
                        />
                        {selectedIndex === index && <p>{item.descripcion}</p>}
                    </div>
                ))}
            </div>
            <div className="ver-mas">
                <a href="https://www.nasa.gov" target="_green" rel="noopener noreferrer">
                    Ver más curiosidades en la NASA
                </a>
            </div>
        </div>
    );
};

export default ExploraCuriosidades;
