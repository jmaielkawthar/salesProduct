import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://salesproduct-api.onrender.com/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handlePrevious = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailCard">
      <Container>
        <Row>
          <Col sm={5}>
            <div className="image">
              <img src={product.image} alt={product.name_product} />
            </div>
          </Col>
          <Col sm={5}>
            <div className="text">
              <p className="ref">{product.ref}</p>
              <p className="date">{product.date}</p>
              <p className="prix">{product.price}</p>
              <p className="type">
                {product.category ? product.category.name_category : ""}
              </p>
              <div className="text-detail">
                <p>{product.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <button className="btn" onClick={handlePrevious}>
        Previous
      </button>
    </div>
  );
};

export default DetailCard;
