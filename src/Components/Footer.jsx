import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../img/Logo-Yves-Rocher.jpg";

const Footer = () => {

  return (
    <div className="footer">

      <Container>
        <Row>
          <Col sm={3}>
            <div className="logo">
              <img src={logo1} alt="logo" />
            </div>
            <p className="text">
              yves rocher un marque d'origine francaise.
              chere client visitez nos site pour voir les nouveauté.
            </p>
          </Col>
          <Col sm={6}>
          <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                <Link to="/about">
                About Us
                 </Link>
                 </li>
                 <li>
                 <Link to="/contact">
                 Contact Us
                 </Link></li>

              </ul>

          </Col>
          <Col sm={3}>
            <div className="newsletter-form">
              <p className="headline">NEWSLETTER </p>
              <p>
Inscrivez-vous à notre newsletter et recevez chaque mois des conseils personnalisés, des informations sur les nouveautés produits et actualités ...!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
