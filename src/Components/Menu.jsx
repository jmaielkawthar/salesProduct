import { Link, Route, Switch, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Users from '../Components/Users';
import Products from '../Components/Products';
import Transportations from '../Components/Transportations';
import Commandes from '../Components/Commandes';
import Categories from '../Components/Categories';
import { Col, Container, Row } from "react-bootstrap";

const Menu = () => {
const [selectedItem, setSelectedItem] = useState('');

const handleMenuItemClick = (item) => {
setSelectedItem(item);
};

const location = useLocation();

return (
<div className="menu">
    <Container>
        <Row>
            <Col sm={2}>
            <ul className="sidebar-menu">
                <li class="user" onClick={()=> handleMenuItemClick('Item 1')}>Users</li>
                <li class="product" onClick={()=> handleMenuItemClick('Item 2')}>Products</li>
                <li class="transport" onClick={()=> handleMenuItemClick('Item 3')}>Transportations</li>
                <li class="categorie" onClick={()=> handleMenuItemClick('Item 4')}>Categories</li>
                <li class="commande" onClick={()=> handleMenuItemClick('Item 5')}>Commandes</li>
            </ul>
            </Col>

            <Col sm={10}>
            <div className="content">
                {selectedItem === 'Item 1' && <div>
                    <Users />
                </div>}
                {selectedItem === 'Item 2' && <div>
                    <Products />
                </div>}
                {selectedItem === 'Item 3' && <div>
                    <Transportations />
                </div>}
                {selectedItem === 'Item 4' && <div>
                    <Categories />
                </div>}
                {selectedItem === 'Item 5' && <div>
                    <Commandes />
                </div>}
            </div>
            </Col>
        </Row>
    </Container>
</div>
);
};

const Home = () => {
return <h2>Home Content</h2>;
};

const About = () => {
return <h2>About Content</h2>;
};

const Contact = () => {
return <h2>Contact Content</h2>;
};

export default Menu;