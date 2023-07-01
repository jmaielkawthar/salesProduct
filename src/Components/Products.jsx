import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [productName, setProductName] = useState('');

  const [prix, setPrix] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [ref, setRef] = useState('');
  const [category, setCategory] = useState('');

  const [editingProduct, setEditingProduct] = useState(null);


  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3008/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching Categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Get Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3008/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };

  useEffect(() => {
    // fetchCategories();
    fetchProducts()
  }, []);

  // Add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name_product: productName,
        price: prix,
        image: image,
        date: date,
        description: description,
        ref: ref,
        category: category, // Use Category directly
      };

      if (editingProduct) {
        await axios.put(
          `http://localhost:3008/product/${editingProduct._id}`,
          productData
        );
        console.log('Product updated:', editingProduct._id);
        setEditingProduct(null);
      } else {
        await axios.post('http://localhost:3008/product', productData);
        console.log('Product added');
      }
      fetchCategories();
      fetchProducts();
      handleReset();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductName(product.name_product);
    setPrix(product.price);
    setImage(product.image);
    setDate(product.date);
    setDescription(product.description);
    setRef(product.ref);
    setCategory(product.category);
  };

  // Delete product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3008/product/${productId}`);
      console.log('Product deleted:', productId);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setProductName('');
    setPrix('');
    setImage('');
    setDate('');
    setDescription('');
    setRef('');
    setCategory('');
    setEditingProduct(null);
  };

  return (
    <div className="forms Products">
      <div>
        <h2>Product Form</h2>
        <form className="crud-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
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
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          
          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="ref">Reference:</label>
            <input
              type="text"
              id="ref"
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name_category}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">
            {editingProduct ? 'Update product' : 'Add product'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div>
        <h2>Product Table</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Date</th>
              <th>Description</th>
              <th>Reference</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name_product}</td>
                <td>{product.price}</td>
                <td>
                  <p>{product.image}</p>
                </td>
                <td>{product.date}</td>
                <td>
                  <p>{product.description}</p>
                </td>
                <td>{product.ref}</td>
                <td>
                  {product.category ? product.category.name_category : ''}
                </td>
                <td>
                  <button
                    className="editAction"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteAction"
                    onClick={() => handleDelete(product._id)}
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

export default Products;
