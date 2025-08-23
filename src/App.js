import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Products from './components/products';
import Navbar from './components/navbar';
import ProductDetails from './components/productDetails';
import Home from './components/home';
import CustomerDashboard from './components/customerdashboard';
import AdminDashboard from './components/admindashboard';
import Cart from './components/cart';


function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/dashboard/admin"element={<AdminDashboard/>} />
         <Route path= "/home" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
