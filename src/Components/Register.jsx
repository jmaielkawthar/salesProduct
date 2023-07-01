import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const Register = ({ handleAdd }) => {
  const [name, setName] = useState('');
  const [cin, setCin] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random(),
      name,
      cin_user: cin,
      telephone,
      adresse,
      age,
      email,
      password,
      role,
    };

    try {
      await axios.post('http://localhost:3008/users', newUser);
      console.log('User added:', newUser);
      handleAdd(newUser);
      handleReset();
      closeModal();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleReset = () => {
    setName('');
    setCin('');
    setTelephone('');
    setAdresse('');
    setAge('');
    setEmail('');
    setPassword('');
    setRole('');
    
  };

  return (
    <div className="register">
      <button onClick={openModal}>Register </button>
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
          <div className="form-row">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <label>Telephone</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label>Adresse</label>
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <label>Cin</label>
          <input
            type="text"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <div>
            <button className="btn" type="submit">
              Register
            </button>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
