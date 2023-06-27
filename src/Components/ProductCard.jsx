import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EditCard from "./EditCard";

const ProductCard = ({ product, handleDelete, handleEdit }) => {
  const dispatch = useDispatch() ;
  return (
    <div className="product-card">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <div className="text">
              <p className="date">{product.date}</p>
              <p className="prix">{product.prix}</p>
              <p className="type">{product.type}</p>
            </div>
          </Card.Text>
          <button
            className="btn" onClick={()=> dispatch(handleDelete(product.id))}
            // onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
          <Link to={`/details/${product.id}`}>
            <button className="btn">Detail</button>
          </Link>
          <EditCard className="btn" product={product} handleEdit={handleEdit}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
