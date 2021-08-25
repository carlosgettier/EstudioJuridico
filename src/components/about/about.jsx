import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/agus.jpg";
import Person02 from "../../assets/about/descarga.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">

      <Title title="QUIENES SOMOS" />

      <p>
        Somos un grupo de jóvenes profesionales dedicados al asesoramiento legal de personas y empresas en materia Laboral, Contractual, y de Sucesiones.
      </p>
      <p>El estudio fue creado como respuesta a las grandes empresas jurídicas, que no toman en consideración las particularidades de cada caso, y simplemente utilizan modelos bajo el formato COPIA-PEGA, de escritos, obteniendo como resultado acuerdos o sentencias inferiores a lo que por derecho corresponde a sus clientes.</p>
      <p>En SOBRERO PRATTO & ASOC. Promovemos el asesoramiento individual, detallado, de cada cliente. Creemos que los nuevos profesionales tienen que pensar menos en la cantidad de causas que poseen en su cartera, y más en la calidad de las resoluciones y/o acuerdos a los que arriban. </p>
      <p>Creemos en que cada persona debe ser capaz de ejercer sus derechos de manera plena. </p>
      {/* <p>No estás cansado de los largos procesos judiciales, de los errores constantes de los profesionales que los llevan a cabo, de la incertidumbre que los largos procesos conllevan, y al final obtener una respuesta que no sientas como realmente favorable.</p> */}
      <p>Contáctanos. Nosotros podemos brindarte una solución, resolver tus problemas, ejercer tus derechos de manera plena, eficaz, y sencilla.</p>
      <Row className="fotos">
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Agustin Sobrero Pratto" job="Abogado" />
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Juanito Perez" job="Abogado" />
        </Col> */}
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
