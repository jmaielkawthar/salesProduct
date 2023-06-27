import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../img/Logo-Yves-Rocher.jpg";
import Filter from "./Filter";
import Connection from './Connexion';
import Register from './Register';
import { userData } from "../userData";

const Header = () => {
  const [data, setData] = useState(userData);
  const handleAdd = (newUser)=> setData([...data,newUser]);
return (
<div className="header">
  <Container>
    <Row>
      <Col sm={2}>
      <div className="logo">
        <img src={logo1} alt="logo" />
      </div>
      </Col>
      <Col sm={7}>
      <div className="navbar">
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
            </Link>
          </li>
          <li>
            <Link to="/administration">
            Administration
            </Link>
          </li>
        </ul>
      </div>
      </Col>
      <Col sm={3} className="connexion-col">
      <Connection handleAdd={handleAdd}/>
      <Register handleAdd={handleAdd}/>
      </Col>
    </Row>
    
  </Container>
</div>
);
};

export default Header;