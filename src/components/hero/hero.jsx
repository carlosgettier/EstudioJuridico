import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/imagenPagAgu1.jpg';
import logo from '../../assets/navbar/LogoNegro.png'
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">


    <div className="hero-image">

      <h1 className="titulo">Sobrero Pratto & Asoc</h1>

      <p className="tex">Nuestra Misión es brindar seguridad y confianza a través de soluciones integrales y adecuadas a las necesidades de cada cliente.</p>

      <img src={HeroImage} alt="hero" className="fondo" />
    </div>



  </div>
);

export default hero;
