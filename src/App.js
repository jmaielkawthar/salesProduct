
import './App.css';
import Header from './Components/Header';
import './css/header.css';
import './css/body.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import ProductList from './Components/ProductList';
import { productData } from "./data";
import { useState } from 'react';
import DetailCard from './Components/DetailCard';
// import AddCard from './Components/AddCard';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import Administration from './Components/Administration';
import Users from './Components/Users';
import Products from './Components/Products';
import Transportations from './Components/Transportations';
import Commandes from './Components/Commandes';
import Categories from './Components/Categories';


function App() {
  const [data, setData] = useState(productData);
  const [textSearch, setTextSearch] = useState("");
  const handleSearch=(x)=>setTextSearch(x);
  const handleDelete =(id) =>setData(data.filter(el =>el.id!==id));
  const handleEdit=(id)=>setData(data.map(el=>el.id===id.id?id:el));
  const handleAdd = (newMovie)=> setData([...data,newMovie]);

  return (
    <div className="App">
          <Router>
          <Header/>
          {/* <AddCard  handleAdd={handleAdd}/> */}

          <Filter textSearch={textSearch} handleSearch={handleSearch}  />
         
            <Routes>
              <Route path="/" element={<ProductList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase()))} handleDelete={handleDelete}  handleEdit={handleEdit}/>} />
              <Route path="/filter" element={<Filter textSearch={textSearch} handleSearch={handleSearch}  />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/administration" element={<Administration />} />
              {/* <Route path="/Users" element={<Users />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Transportations" element={<Transportations />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/Commandes" element={<Commandes />} /> */}
              <Route path="/details/:id"  element={<DetailCard product={data}  />}/>
              
            </Routes>
            <Footer/>
          </Router>
         
    </div>
  );
}

export default App;
