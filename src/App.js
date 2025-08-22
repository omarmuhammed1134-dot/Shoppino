import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Products from './components/products';
import Navbar from './components/navbar';
import ProductDetails from './components/productDetails';
import Cart from './components/cart';
import Home from './components/home';


function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />

        <Routes>
         <Route path= "/home" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart/:id" element={< Cart/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
