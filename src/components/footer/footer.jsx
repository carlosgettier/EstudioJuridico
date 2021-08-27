import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Logo from '../../assets/navbar/LogoTodoBlanco.png';
import Arrow from '../../assets/footer/arrow.svg';
var fecha = new Date();

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={12} sm={8} md={8}>
          <div className="footer-box">
            <img src={Logo} alt="logo" />
            <p>© Copyright ASP & Asoc. All Rights Reserved {fecha.getFullYear()}.</p>
            <p>Design by <a href="https://www.instagram.com/carlosgettier/" target="blank">Carlos Gettier.</a></p>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top">
              <p><i className="fa fa-arrow-circle-up"></i> BACK TO TOP</p>
              {/* <img src={Arrow} alt="arrow" /> */}
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
