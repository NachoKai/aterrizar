import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <>
      <li className="carousel-cards">
        <a href="#" className="home-ui-card">
          <div className="home-ui-card-img">
            <img className="card-img" src={props.src} />
          </div>
          <div className="home-ui-card-content">
            <span className="home-ui-card-product">Alojamientos</span>
            <p className="home-ui-card-title">{props.nombre}</p>
          </div>
          <div className="home-ui-pricebox">
            <div className="home-ui-card-content-col">
              <div className="home-ui-card-content-row">
                <div className="home-ui-card-rating">
                  <span>{props.puntaje}</span>
                </div>
                <div className="home-ui-card-stars-container">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="home-ui-card-drivers-level1-container">
                <span className="home-ui-driver">{props.lugar}</span>
              </div>
            </div>
          </div>
          <div className="commercial-card">
            <div>
              <span className="description-text">1 noche, 2 personas</span>
            </div>
            <div className="prices-text">
              <span className="actual-price">
                <b>{props.precioActual}</b>
              </span>
              <span className="old-price">
                <del>{props.precioViejo}</del>
              </span>
            </div>
          </div>
          <div className="price-description">Pagá en cuotas sin interés.</div>
        </a>
      </li>
    </>
  );
};

export default Card;
