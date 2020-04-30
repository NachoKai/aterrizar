import React from "react";
import "./Searchbox.scss";

const Searchbox = () => {
  return (
    <>
      <div className="searchbox-container">
        <div className="searchbox-sbox-all-boxes">
          <div className="sbox-main-title-container">
            <span className="sbox-title-plus">
              Alojamientos con Reserva Flexible
            </span>
          </div>

          <div className="sbox-inputs-container">
            <div className="sbox-place-container">
              <div className="sbox-place-container-label">
                <label className="sbox-input-label">Destino</label>
                <div className="input-container">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <input
                    type="text"
                    autoComplete="disabled"
                    placeholder="Ingresá una ciudad, alojamiento o atracción"
                    className="input-tag"
                  />
                </div>
              </div>
              <div className="sbox-dates-row">
                <label className="sbox-input-label">Fechas</label>
                <div className="sbox-input-fechas" />
                <div className="input-container">
                  <i className="fas fa-calendar-day" aria-hidden="true"></i>
                  <span>Entrada:&nbsp;</span>
                  <input
                    type="date"
                    autoComplete="disabled"
                    placeholder="Entrada"
                    className="input-tag"
                  />
                </div>
                <div className="input-container">
                  <i className="fas fa-calendar-week" aria-hidden="true"></i>
                  <span>Salida:&nbsp;</span>
                  <input
                    type="date"
                    autoComplete="disabled"
                    placeholder="Salida"
                    className="input-tag"
                  />
                </div>
              </div>
            </div>
            <div className="sbox-dates-row">
              <label className="sbox-input-label">Habitaciones</label>
              <div className="sbox-input-habitaciones">
                <div className="input-container-hab">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <input
                    type="number"
                    autoComplete="disabled"
                    placeholder="1"
                    className="input-tag"
                  />
                </div>
                <div className="input-container-hab">
                  <i className="fas fa-user-friends" aria-hidden="true"></i>
                  <input
                    type="number"
                    autoComplete="disabled"
                    placeholder="2"
                    className="input-tag"
                  />
                </div>
              </div>
              <div className="sbox-3-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-tag sbox-no-date-specified"
                  />
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span>Todavía no he decidido la fecha</span>
                </label>
              </div>
            </div>
            <div className="sbox-button-container">
              <a href="#" className="sbox-3-btn">
                <i className="fas fa-search" aria-hidden="true"></i>
                <label className="button-circle-label">Buscar</label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbox;
