import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Content from '../Components/Content';
import Users from '../Components/Users';
import Products from '../Components/Products';
import Transportations from '../Components/Transportations';
import Commandes from '../Components/Commandes';
import Categories from '../Components/Categories';

const Administration = () => {
  return (
    <div className='administration'>
        <h1>Administration</h1>
       <Container>
        <Row>
          <Col sm={2}>
          <div className="sidebar">
            <ul className="sidebar-menu">
              <li class="user">
                <Link to="/administration/Users">Users</Link>
              </li>
              <li class="product">
                <Link to="/administration/Products">Products</Link>
              </li>
              <li class="transport">
                <Link to="/administration/Transportations">Transportations</Link>
              </li>
              <li class="categorie">
                <Link to="/administration/Categories">Categories</Link>
              </li>
              <li class="commande">
                <Link to="/administration/Commandes">Commandes</Link>
              </li>
            </ul>
          </div>

          </Col>
          <Col sm={10}>
          <div className="contenu">
              <Routes>
              <Route path="/administration/Users" element={<Users />} />
                <Route path="/administration/Products" element={<Products />} />
                <Route path="/administration/Transportations" element={<Transportations />} />
                <Route path="/administration/Categories" element={<Categories />} />
                <Route path="/administration/Commandes" element={<Commandes />} />
              </Routes>
            </div>
          </Col>
        </Row>
       </Container>
    
    </div>

  )
}

export default Administration