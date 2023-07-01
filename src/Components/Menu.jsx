
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

return (
<div className="menu">
    <Container className='container-form' fluid >
        <Row>
            <Col sm={2} style={{ minWidth: '20%' }}>
            <ul className="sidebar-menu">
                <li className="user" onClick={()=> handleMenuItemClick('Item 1')}>Users</li>
                <li className="product" onClick={()=> handleMenuItemClick('Item 2')}>Products</li>
                <li className="transport" onClick={()=> handleMenuItemClick('Item 3')}>Transportations</li>
                <li className="categorie" onClick={()=> handleMenuItemClick('Item 4')}>Categories</li>
                <li className="commande" onClick={()=> handleMenuItemClick('Item 5')}>Commandes</li>
            </ul>
            </Col>

            <Col sm={10} style={{ minWidth: '70%', maxWidth:'80%' }}>
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


export default Menu;