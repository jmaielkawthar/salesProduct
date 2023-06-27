import React, { useState } from "react";
import Modal from 'react-modal';

const EditCard = ({ product, handleEdit }) => {
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [prix, setPrix] = useState(product.prix);
  const [date, setDate] = useState(product.date);
  const [type, setType] = useState(product.type);
  const [detail, setDetail] = useState(product.detail);

 const handleSubmit=(e)=>{
     e.preventDefault()
     const newOne = {
      id: Math.random(),
      name,
      image,
      date,
      type,
      detail,
      prix,
    };
    handleEdit(newOne);
    setDate("");
    setImage("");
    setName("");
    setType("");
    setPrix("");
    setDetail("");
 }  
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
    <div className="edit-card">
      <button onClick={openModal} className="btn-normal">Edit </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} />
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
          <label>Product image</label>
          <input type="text"  value={image} onChange={e=>setImage(e.target.value)} />
          <div>
            <button className="btn" type="submit">Add</button>
            <button className="btn" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditCard;
