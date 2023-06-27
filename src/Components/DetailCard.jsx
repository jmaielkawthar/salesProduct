import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditCard from "./EditCard";

const DetailCard = ({ product, handleEdit }) => {
  const { id } = useParams();
  const item = product.find((el) => el.id == id);

  return (
    <div className="detailCard">
      <Container>
        <Row>
          <Col sm={5}>
            <div className="image">
              <img src={item.image} alt={item.name}  />
            </div>
          </Col>
          <Col sm={5}>
            <div className="text">
              <p className="title">{item.name}</p>
              <p className="date">{item.date}</p>
              <p className="prix">{item.prix}</p>
              <p>{item.type}</p>
              <div className="text-detail">
              <p>{item.detail}</p>
            
            </div>
            </div>
            
           
           </Col>
        </Row>
      </Container>
      

    </div>
  );
};

export default DetailCard;
