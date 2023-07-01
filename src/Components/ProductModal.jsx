import React, { useState } from "react";
import Modal from "react-modal";

const ProductModal = ({ product, onClose, onBuy, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    onClose();
  }

  return (
    <div className="product_modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{product.name_product}</h2>
        <img src={product.image} alt={product.name_product} />
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <div>
          <button className="btn" type="submit" onClick={handleAddToCart}>
            buy product
          </button>
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
