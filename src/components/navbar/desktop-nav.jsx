import React from 'react';
import { Link } from "react-scroll";
// SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/LogoNegro.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "ewrapper flex-s-between" : ""}`}>
    <div className="wrapperflex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              QUIENES SOMOS
            </Link>
          </li>
          {/* <li>
            <Link activeClass="active-link" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
              DERECHO LABORAL
            </Link>
          </li> */}
          <li>
            <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACTOS
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="Tarjeta" spy={true} smooth={true} offset={-70} duration={500}>
              TARJETA DIGITAL
            </Link>
          </li>



        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;