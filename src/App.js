import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Home from './components/home';
import CustomerDashboard from './components/customerdashboard';
import AdminDashboard from './components/admindashboard';
import Cart from './components/cart';
import PrivateRoute from './routes/privateRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();

  return (
    <div className='bg-light'>
      <AuthProvider>
        <CartProvider>
          {location.pathname !== "/login" &&  <Navbar />}
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar/>
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <Home />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/customer"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <CustomerDashboard />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <AdminDashboard />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <Products />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <ProductDetails />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <div className="d-flex">
                    <Sidebar />
                    <Cart />
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
