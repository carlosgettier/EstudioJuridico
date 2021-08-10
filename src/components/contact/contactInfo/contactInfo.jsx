import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine2="Av. Córdoba 1209 (Microcentro) "
            textLine1="Soldado de la Independencia 531 (Palermo)"
            textLine3="CABA"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine2="011 – 15 5044 2046"
            textLine1="0351- 15 309 5631 "


          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine2="dra.yamilamartinez@gmail.com"
            textLine1="dr.agustinsobreropratto@gmail.com"
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
