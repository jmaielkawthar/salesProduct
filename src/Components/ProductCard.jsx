import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from './ProductModal';
import CardList from './CardList';

const ProductCard = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    // Handle adding to cart
    const item = {
      product,
      quantity,
    };
    // ...
    console.log("Adding to cart:", product, quantity);
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuy = () => {
    // Handle buying the product
    // ...
    closeModal();
  };

  // Get Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3008/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name_product} />
            <div className="card-body">
              <div className="card-title h5">{product.name_product}</div>
              <p className="card-text">
                <div className="text">
                  <p className="ref">{product.ref}</p>
                  <p className="date">{product.date}</p>
                  <p className="prix">{product.price}</p>
                  <p className="type">{product.category ? product.category.name_category : ''}</p>
                </div>
              </p>
            </div>
            <button onClick={() => {
              setSelectedProduct(product);
              setIsModalOpen(true);
            }}>
              Add to Cart
            </button>
            {isModalOpen && (
              <ProductModal
                product={selectedProduct}
                onClose={closeModal}
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
              />
            )}
            <Link to={`/details/${product._id}`}>
              <button className="btn">Detail</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
