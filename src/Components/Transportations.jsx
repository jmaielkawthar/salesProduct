import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transportations = () => {
  const [transportations, setTransportations] = useState([]);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [prix, setPrix] = useState('');
  const [date, setDate] = useState('');
  const [editingTransportation, setEditingTransportation] = useState(null);

  // Get Transportations
  const fetchTransportations = async () => {
    try {
      const response = await axios.get('http://localhost:3008/transportation');
      setTransportations(response.data);
    } catch (error) {
      console.error('Error fetching Transportations:', error);
    }
  };

  useEffect(() => {
    fetchTransportations();
  }, []);

  // Add or update transportation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const transportationData = {
        name_transportation: name,
        telephone: telephone,
        prix: prix,
        date_delivery: date,
      };

      if (editingTransportation) {
        await axios.put(
          `http://localhost:3008/transportation/${editingTransportation._id}`,
          transportationData
        );
        console.log('Transportation updated:', editingTransportation._id);
        setEditingTransportation(null);
      } else {
        const response = await axios.post('http://localhost:3008/transportation', transportationData);
        console.log('Transportation added:', response.data);
      }

      fetchTransportations();
      handleReset();
    } catch (error) {
      console.error('Error saving transportation:', error);
    }
  };

  // Edit transportation
  const handleEdit = (transportation) => {
    setEditingTransportation(transportation);
    setName(transportation.name_transportation);
    setTelephone(transportation.telephone);
    setPrix(transportation.prix);
    setDate(transportation.date_delivery);
  };

  // Delete transportation
  const handleDelete = async (transportationId) => {
    try {
      await axios.delete(`http://localhost:3008/transportation/${transportationId}`);
      console.log('Transportation deleted:', transportationId);
      fetchTransportations();
    } catch (error) {
      console.error('Error deleting transportation:', error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setName('');
    setTelephone('');
    setPrix('');
    setDate('');
    setEditingTransportation(null); // Reset the editingTransportation state to null
  };

  return (
    <div className="forms Transportations">
      <div>
        <h2>Transportation Form</h2>
        <form className="crud-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="prix">Prix:</label>
            <input
              type="text"
              id="prix"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="date">Date delivery:</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit">
            {editingTransportation ? 'Update transportation' : 'Add transportation'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div>
        <h2>Transportation Table</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Prix</th>
              <th>Date delivery</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transportations.map((transportation) => (
              <tr key={transportation._id}>
                <td>{transportation._id}</td>
                <td>{transportation.name_transportation}</td>
                <td>{transportation.telephone}</td>
                <td>{transportation.prix}</td>
                <td>{transportation.date_delivery}</td>
                <td>
                  <button
                    className="editAction"
                    onClick={() => handleEdit(transportation)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteAction"
                    onClick={() => handleDelete(transportation._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transportations;
