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

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const location = useLocation();

  return (
    <div className="bg-light">
      <AuthProvider>
        <CartProvider>
          {location.pathname !== "/login" && <Navbar />}

          <Routes>
            {/* Login page without sidebar */}
            <Route path="/login" element={<Login />} />

            {/* Home */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <h2>Welcome</h2>
                        <p>Select a page from the sidebar.</p>
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <Home />
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/customer"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <CustomerDashboard />
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/admin"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <AdminDashboard />
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <Products />
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/products/:id"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <ProductDetails />
                      </div>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-3 p-0">
                        <Sidebar />
                      </div>
                      <div className="col-12 col-md-9 p-3">
                        <Cart />
                      </div>
                    </div>
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
