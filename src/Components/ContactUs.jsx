import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../img/contact.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = {
      id: Math.random(),
      name,
      prenom,
      date,
      detail,
    };

  };
  return (
    <div className="contact">
      <Container>
        <Row >
    
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>prenom</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />

              <label>Description</label>
              <textarea
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}

              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <div>
                <button className="btn" type="submit">
                  send
                </button>
                <button className="btn">Cancel</button>
              </div>
            </form>
         
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
