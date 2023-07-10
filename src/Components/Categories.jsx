import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Categories = () => {
  const [Categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [editingCategorie, seteditingCategorie] = useState(null);

  // Get Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://salesproduct-api.onrender.com/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching Categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add or update categorie
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const categorieData = {
        name_category: name,
      };
  
      if (editingCategorie) {
        await axios.put(
          `https://salesproduct-api.onrender.com/category/${editingCategorie._id}`,
          categorieData
        );
        console.log('categorie updated:', editingCategorie._id);
        seteditingCategorie(null);
      } else {
        const response = await axios.post('https://salesproduct-api.onrender.com/category', categorieData);
        console.log('categorie added:', response.data);
      }
  
      fetchCategories();
      handleReset();
    } catch (error) {
      console.error('Error saving categorie:', error);
    }
  };

  // Edit categorie
  const handleEdit = (categorie) => {
    seteditingCategorie(categorie);
    setName(categorie.name_category);
  };

  // Delete categorie
  const handleDelete = async (categorieId) => {
    try {
      await axios.delete(`https://salesproduct-api.onrender.com/category/${categorieId}`);
      console.log('categorie deleted:', categorieId);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting categorie:', error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setName('');
    seteditingCategorie(null); // Reset the editingCategorie state to null
  };

  return (
    <div className="forms Categories">
      <div>
        <h2>categorie Form</h2>
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
          
          <button type="submit">
            {editingCategorie ? 'Update categorie' : 'Add categorie'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div>
        <h2>categorie Table</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Categories.map((categorie) => (
              <tr key={categorie._id}>
                <td>{categorie._id}</td>
                <td>{categorie.name_category}</td>
                <td>
                  <button
                    className="editAction"
                    onClick={() => handleEdit(categorie)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteAction"
                    onClick={() => handleDelete(categorie._id)}
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

export default Categories;