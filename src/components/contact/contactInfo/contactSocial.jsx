import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";





const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.facebook.com/SobreroPrattoAsoc" target="blank"> <i class="fab fa-facebook-f"></i></a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.instagram.com/sobreroprattoasociados/" className="insta" target="blank">
            <i class="fab fa-instagram"></i></a>
        </Col>

      </Row>
    </Col>
  </Row>
);

export default contactSocial;
