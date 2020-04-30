import React from "react";
import Card from "../Card/Card";
import "./ModuleWrapper.scss";

const ModuleWrapper = () => {
  return (
    <>
      <div className="module-wrapper">
        <div className="home-ui-module">
          <div className="commercial-module">
            <div className="module-lead">Nuevo</div>
            <div className="module-title">
              <h2>
                Volvé a soñar, elegí tu próximo alojamiento a precios increíbles
              </h2>
            </div>
            <a href="#" className="module-link">
              <label className="module-label">Ver más ofertas</label>
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
          <div className="commercial-module__offers"></div>
        </div>

        <ul className="list-container">
          <Card
            nombre="La Pedrera Small Hotel Spa"
            puntaje="8.6"
            lugar="Búzios"
            precioActual="$8.550"
            precioViejo=""
            src="https://media.staticontent.com/media/pictures/ecd2257a-e3fc-4e46-a375-20e8fc90920f/295x200"
          ></Card>
          <Card
            nombre="Cyan Américas Towers Hotel"
            puntaje="7.8"
            lugar="Buenos Aires"
            precioActual="$4.888"
            precioViejo="$6.432"
            src="https://media.staticontent.com/media/pictures/14d8a523-14bf-41d1-9e33-128c88357514/295x200"
          ></Card>
          <Card
            nombre="Howard Johnson Hotel & Suites"
            puntaje="8.1"
            lugar="Córdoba"
            precioActual="$4.452"
            precioViejo="$5.782"
            src="https://media.staticontent.com/media/pictures/657d687c-1b19-46ba-9848-f08c7870897d/295x200"
          ></Card>
          <Card
            nombre="All Ritmo Cancun Resort & Park"
            puntaje="6.6"
            lugar="Cancún"
            precioActual="$13.447"
            precioViejo="$28.611"
            src="https://media.staticontent.com/media/pictures/9b75f696-781b-449e-bf70-968b3585ae47/295x200"
          ></Card>
          <Card
            nombre="Radisson Cartagena Ocean Pavillion"
            puntaje="8.4"
            lugar="Cartagena de Indias"
            precioActual="$10.273"
            precioViejo=""
            src="https://media.staticontent.com/media/pictures/7690ea49-53f8-4bef-93bf-465e930952be/295x200"
          ></Card>
        </ul>
      </div>
    </>
  );
};

export default ModuleWrapper;
