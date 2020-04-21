import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="header">
        <div className="header-autogestion-container">
          <div className="header-container-general">
            <div className="header-logo">
              <a href="/" className="header-autogestion-link">
                <i class="fas fa-plane-arrival"></i>
                <span>aterrizar</span>
              </a>
            </div>
            <ul className="header-autogestion">
              <li>
                <ul className="login-trips-help">
                  <li className="header-autogestion-item">
                    <a href="/" className="header-autogestion-link">
                      <i class="fas fa-user"></i>
                      <span>Iniciar Sesion</span>
                    </a>
                  </li>
                  <li className="header-autogestion-item">
                    <a href="/" className="header-autogestion-link">
                      <i class="fas fa-suitcase"></i>
                      <span>Mis Viajes</span>
                    </a>
                  </li>
                  <li className="header-autogestion-item">
                    <a href="/" className="header-autogestion-link">
                      <i class="fas fa-question-circle"></i>
                      <span>Ayuda</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-navigation">
          <div className="header-corners-container">
            <div className="header-products-container">
              <ul className="header-list-products">
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-bed"></i>
                    <label className="button-circle-label">Alojamiento</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-plane"></i>
                    <label className="button-circle-label">Vuelos</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-luggage-cart"></i>
                    <label className="button-circle-label">Paquetes</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="far fa-star"></i>
                    <label className="button-circle-label">Imbatibles</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-running"></i>
                    <label className="button-circle-label">Escapadas</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-ticket-alt"></i>
                    <label className="button-circle-label">Actividades</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-car"></i>
                    <label className="button-circle-label">Autos</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-medkit"></i>
                    <label className="button-circle-label">Seguros</label>
                  </a>
                </li>
                <li className="header-product-item">
                  <a href="/" className="shifu-3-button-circle">
                    <div className="button-circle-icon"></div>
                    <i class="fas fa-truck"></i>
                    <label className="button-circle-label">Traslados</label>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shifu-inspiration-button">
            <a href="/" className="header-autogestion-link">
              <i class="far fa-compass"></i>
              <span>¿Dónde aterrizamos?</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
