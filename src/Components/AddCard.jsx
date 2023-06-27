import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from 'react-modal';

const AddCard = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOne = {
      id: Math.random(),
      name,
      image,
      date,
      type,
      detail,
      prix,
    };
    handleAdd(newOne);
    setDate("");
    setImage("");
    setName("");
    setType("");
    setPrix("");
    setDetail("");
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
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="addCard">
          <button onClick={openModal} className="btn-normal">add new product </button>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
                            <label>Prix</label>
              <input
                type="text"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
              />
                            <label>Type</label>
              <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
                                          <label>Description</label>
              <textarea
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
               <div className="image">
                <label>Product image</label>
                <input
                  type="file"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
               </div>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <div>
              <button className="btn" type="submit">Add</button>
            <button className="btn" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </Modal>
    </div>
  );
};

export default AddCard;
