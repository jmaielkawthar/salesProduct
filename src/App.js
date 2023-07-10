
import './App.css';
import Header from './Components/Header';
import './css/header.css';
import './css/body.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import React, { useEffect, useState } from 'react';
import DetailCard from './Components/DetailCard';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import Administration from './Components/Administration';
import ProductCard from './Components/ProductCard';
import axios from 'axios';
import CardList from './Components/CardList';

function App() {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://salesproduct-api.onrender.com/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    setTextSearch(searchTerm);
    filterProducts(searchTerm);
  };

  const filterProducts = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name_product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddCard = (id) => {
    // Handle adding card
    // ...
  };

  return (
    <div className="App">
          <Router>
          <Header/>
          <Filter handleSearch={handleSearch}   />
          <Routes>
              <Route
                path="/"
                element={<ProductCard handleAddCard={handleAddCard} products={filteredProducts.length > 0 ? filteredProducts : products} />}
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/administration" element={<Administration />} />
              <Route
                path="/cardlist"
                element={<CardList products={selectedProducts} />}
              />
              <Route
                path="/details/:id"
                element={<DetailCard products={filteredProducts.length > 0 ? filteredProducts : products} />}
              />
          </Routes>
            <Footer/>
          </Router>
         
    </div>
  );
}

export default App;
