import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">ENTONCES...</h4>
      <p className="font12 weight500">
        ¿No estás cansado de los largos procesos judiciales, de los errores constantes de los profesionales que los llevan a cabo, de la incertidumbre que los largos procesos conllevan, y al final obtener una respuesta que no sientas como realmente favorable?.

      </p>
      <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="boton-contact">
        CONTACTANOS
      </Link>
      {/* <p className="font12 weight500">Read More</p> */}
    </div>
  </div>
);

export default about;
