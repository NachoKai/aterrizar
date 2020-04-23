import React from "react";
import "./Searchbox.scss";

const Searchbox = () => {
  return (
    <>
      <div class="searchbox-container">
        <div class="searchbox-sbox-all-boxes">
          <div class="sbox-main-title-container">
            <span class="sbox-title-plus">
              Alojamientos con Reserva Flexible
            </span>
          </div>

          <div className="sbox-inputs-container">
            <div class="sbox-place-container">
              <div class="sbox-place-container-label">
                <label class="sbox-input-label">Destino</label>
                <div class="input-container">
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <input
                    type="text"
                    autocomplete="disabled"
                    placeholder="Ingresá una ciudad, alojamiento o atracción"
                    class="input-tag"
                  />
                </div>
              </div>
              <div class="sbox-dates-row">
                <label class="sbox-input-label">Fechas</label>
                <div class="sbox-input-fechas" />
                <div class="input-container">
                  <i class="fas fa-calendar-day" aria-hidden="true"></i>
                  <span>Entrada:&nbsp;</span>
                  <input
                    type="date"
                    autocomplete="disabled"
                    placeholder="Entrada"
                    class="input-tag"
                  />
                </div>
                <div class="input-container">
                  <i class="fas fa-calendar-week" aria-hidden="true"></i>
                  <span>Salida:&nbsp;</span>
                  <input
                    type="date"
                    autocomplete="disabled"
                    placeholder="Salida"
                    class="input-tag"
                  />
                </div>
              </div>
            </div>
            <div class="sbox-dates-row">
              <label class="sbox-input-label">Habitaciones</label>
              <div class="sbox-input-habitaciones">
                <div class="input-container-hab">
                  <i class="fas fa-bed" aria-hidden="true"></i>
                  <input
                    type="number"
                    autocomplete="disabled"
                    placeholder="1"
                    class="input-tag"
                  />
                </div>
                <div class="input-container-hab">
                  <i class="fas fa-user-friends" aria-hidden="true"></i>
                  <input
                    type="number"
                    autocomplete="disabled"
                    placeholder="2"
                    class="input-tag"
                  />
                </div>
              </div>
              <div class="sbox-3-checkbox">
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    class="checkbox-tag sbox-no-date-specified"
                  />
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <span>Todavía no he decidido la fecha</span>
                </label>
              </div>
            </div>
            <div class="sbox-button-container">
              <a href="#" class="sbox-3-btn">
                <i class="fas fa-search" aria-hidden="true"></i>
                <label class="button-circle-label">Buscar</label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbox;
