import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Commande = () => {
  const [commandes, setCommandes] = useState([]);
  const [quantite, setQuantite] = useState('');
  const [editingCommande, setEditingCommande] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [transportations, setTransportations] = useState([]);
  const [selectedTransportation, setSelectedTransportation] = useState('');

  // Get Commandes
  const fetchCommandes = async () => {
    try {
      const response = await axios.get('http://localhost:3008/commande');
      setCommandes(response.data);
    } catch (error) {
      console.error('Error fetching Commandes:', error);
    }
  };

  // Get Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3008/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };

  // Get Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3008/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching Users:', error);
    }
  };

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
    fetchCommandes();
    fetchProducts();
    fetchUsers();
    fetchTransportations();
  }, []);

  // Add or update commande
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const commandeData = {
        quantite: quantite,
        products: [{ product: selectedProduct, quantity: 1 }],
        user: selectedUser,
        transportation: selectedTransportation,
      };

      if (editingCommande) {
        await axios.put(
          `http://localhost:3008/commande/${editingCommande._id}`,
          commandeData
        );
        console.log('Commande updated:', editingCommande._id);
        setEditingCommande(null);
      } else {
        const response = await axios.post('http://localhost:3008/commande', commandeData);
        console.log('Commande added:', response.data);
      }

      fetchCommandes();
      handleReset();
    } catch (error) {
      console.error('Error saving commande:', error);
    }
  };

  // Edit commande
  const handleEdit = (commande) => {
    setEditingCommande(commande);
    setQuantite(commande.quantite);
    setSelectedProduct(commande.products[0].product);
    setSelectedUser(commande.user);
    setSelectedTransportation(commande.transportation);
  };

  // Delete commande
  const handleDelete = async (commandeId) => {
    try {
      await axios.delete(`http://localhost:3008/commande/${commandeId}`);
      console.log('Commande deleted:', commandeId);
      fetchCommandes();
    } catch (error) {
      console.error('Error deleting commande:', error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setQuantite('');
    setSelectedProduct('');
    setSelectedUser('');
    setSelectedTransportation('');
    setEditingCommande(null);
  };

  return (
    <div className="forms Commande">
      <div>
        <h2>Commande Form</h2>
        <form className="crud-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="quantite">Quantite:</label>
            <input
              type="text"
              id="quantite"
              value={quantite}
              onChange={(e) => setQuantite(e.target.value)}
            />
          </div>

          {/* Select options for products */}
          <div className="form-row">
            <label htmlFor="products">Product:</label>
            <select
              id="products"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select options for users */}
          <div className="form-row">
            <label htmlFor="users">User:</label>
            <select
              id="users"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select options for transportations */}
          <div className="form-row">
          <label htmlFor="transportations">Transportation:</label>
          <select
            id="transportations"
            value={selectedTransportation}
            onChange={(e) => setSelectedTransportation(e.target.value)}
          >
            <option value="">Select a transportation</option>
            {transportations.map((transportation) => (
              <option key={transportation._id} value={transportation._id}>
                {transportation.name}
              </option>
            ))}
          </select>
          </div>

          <button type="submit">
            {editingCommande ? 'Update commande' : 'Add commande'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div>
        <h2>Commande Table</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>user </th>
              <th>Product</th>
              <th>Quantite</th>
              <th>transportation</th>
              {/* Add other table headings for related data (products, user, transportation) */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande._id}>
                <td>{commande._id}</td>
                <td>{commande.selectedUser}</td>
                <td>{commande.selectedProduct}</td>
                <td>{commande.quantite}</td>
                <td>{commande.selectedTransportation}</td>

                {/* Add other table cells for related data (products, user, transportation) */}
                <td>
                  <button
                    className="editAction"
                    onClick={() => handleEdit(commande)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteAction"
                    onClick={() => handleDelete(commande._id)}
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

export default Commande;
