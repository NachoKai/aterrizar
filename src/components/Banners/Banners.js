import React from "react";
import "./Banners.scss";

const Banners = () => {
  return (
    <>
      <div className="home-box-mb">
        <h2 className="home-ui-title-h2">
          Información importante sobre Coronavirus
        </h2>
        <div className="home-ui-tablet-scroll-container">
          <div className="home-ui-banners-mkt-item">
            <div className="banner-card-up">
              <i className="far fa-comment-dots"></i>
              <h3 className="banner-card-h3">Gestioná tu viaje online</h3>
            </div>
            <div className="banner-card-mid">
              <div className="banner-description">
                <span>Tenemos una carga inusual de trabajo y solo </span>
                <span className="text-special">
                  podemos ayudarte por nuestro canal digital.
                </span>
                 <span>Cambiá o cancelá tu reserva ingresando a </span>
                <span className="text-special">Mis Viajes.</span>
              </div>
            </div>
            <div className="banner-card-down">
              <button className="banner-button">Mas información</button>
            </div>
          </div>
          <div className="home-ui-banners-mkt-item">
            <div className="banner-card-up">
              <i className="fas fa-plane-slash"></i>
              <h3 className="banner-card-h3">Pasajeros varados</h3>
            </div>
            <div className="banner-card-mid">
              <div className="banner-description">
                <span>El gobierno implementó un </span>
                <span className="text-special">
                  Programa de asistencia para Argentinos en el exterior.
                </span>
                 <span>Comunicate con tu consulado mas cercano.</span>
              </div>
            </div>
            <div className="banner-card-down">
              <button className="banner-button">Mas información</button>
            </div>
          </div>
          <div className="home-ui-banners-mkt-item">
            <div className="banner-card-up">
              <i className="far fa-question-circle"></i>
              <h3 className="banner-card-h3">Información importante</h3>
            </div>
            <div className="banner-card-mid">
              <div className="banner-description">
                <span>Los </span>
                <span className="text-special">
                  vuelos de cabotaje y micros de larga distancia
                </span>
                 <span> estan suspendidos hasta el 26 de abril inclusive.</span>
              </div>
            </div>
            <div className="banner-card-down">
              <button className="banner-button">Mas información</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
