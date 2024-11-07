import React, { useState } from "react";
import "../../src/App.css/";
import quesst from "../assets/img/quesst.jpg";
import spacestation from "../assets/img/spacestation.jpg";
import commercialcrew from "../assets/img/commercialcrew.jpg";
import decelerator from "../assets/img/decelerator.jpg";
import marsrover from "../assets/img/marsrover.jpg";
import juno from "../assets/img/juno.jpg";
import parker from "../assets/img/parker.png";
import telescopio from "../assets/img/telescopio.jpg";
import artemis2 from "../assets/img/artemis2.png";
import { useNavigate } from "react-router-dom"; // Para la navegación

const curiosidades = [
    {
        imgSrc: quesst,
        descripcion:
            "NASA's mission to demonstrate how the X-59 can fly supersonic without generating loud sonic booms.",
        Link: "https://www.nasa.gov/mission/quesst/"
    },
    {
        imgSrc: spacestation,
        descripcion:
            "The International Space Station Program brings together international flight crews, multiple launch vehicles, the international scientific research community and much more.",
        Link: "https://www.nasa.gov/international-space-station/"
    },
    {
        imgSrc: commercialcrew,
        descripcion:
            "NASA's Commercial Crew Program is delivering on its goal of safe, reliable, and cost-effective human transportation to and from the International Space Station.",
        Link: "https://www.nasa.gov/humans-in-space/commercial-space/commercial-crew-program/"
    },
    {
        imgSrc: decelerator,
        descripcion:
            "NASA's Low-Earth Orbit Flight Test of an Inflatable Decelerator, or LOFTID, is demonstrating a cross-cutting aeroshell for atmospheric re-entry.",
        Link: "https://www.nasa.gov/mission/low-earth-orbit-flight-test-of-an-inflatable-decelerator-loftid/"
    },
    {
        imgSrc: marsrover,
        descripcion:
            "This rover and its aerial sidekick were assigned to study the geology of Mars and much more.",
        Link: "https://science.nasa.gov/mission/mars-2020-perseverance/"
    },
    {
        imgSrc: juno,
        descripcion:
            "Probing beneath Jupiter's dense clouds to answer questions about the origin and evolution of Jupiter, our solar system, and giant planets across the cosmos.",
        Link: "https://science.nasa.gov/mission/juno/"
    },
    {
        imgSrc: parker,
        descripcion:
            "On a mission to 'touch the Sun,' NASA's Parker Solar Probe became the first spacecraft to fly through the corona – the Sun's upper atmosphere.",
        Link: "https://science.nasa.gov/mission/parker-solar-probe/"
    },
    {
        imgSrc: telescopio,
        descripcion:
            "Webb is the premier observatory of the next decade, serving thousands of astronomers worldwide. It studies every phase in the history of our Universe.",
        Link: "https://science.nasa.gov/mission/webb/"
    },
    {
        imgSrc: artemis2,
        descripcion:
            "Four astronauts will venture around the Moon on Artemis II, the first crewed mission on NASA's path to establishing a long-term presence at the Moon for science and exploration.",
        Link: "https://www.nasa.gov/mission/artemis-i/"
    }
];

const Expomisiones = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate(); // Instanciamos el hook para navegación

    const handleImageClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <div className="explora-curiosidades">
            <h1>Explora Curiosidades Espaciales</h1>
            {/* Botón para volver a la página anterior */}
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
                        {selectedIndex === index && (
                            <div>
                                <p>{item.descripcion}</p>
                                <a
                                    href={item.Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "blue", textDecoration: "underline" }}
                                >
                                    Ir
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="ver-mas">
                <a
                    href="https://www.nasa.gov/nasa-missions/"
                    target="_green"
                    rel="noopener noreferrer"
                >
                    Ver más misiones en la NASA
                </a>
            </div>
        </div>
    );
};

export default Expomisiones;
