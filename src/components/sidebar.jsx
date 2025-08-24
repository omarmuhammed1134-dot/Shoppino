import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div
        className="bg-light text-dark p-3 mt-4 card mx-2 shadow-lg d-flex flex-column slider"
      >
        <p className="fs-4 fw-semibold text-primary">Dashboard</p>
        <hr />
        <nav className="nav flex-column flex-grow-1">
          <NavLink
            to="/home"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-house-door"></i>
            <span className="mx-1 fw-semibold">Home</span>
          </NavLink>

          <div className="nav flex-column">
            <div className="nav-item dropdown mb-3">
              <button
                className="btn btn-light border rounded-pill px-3 py-2 w-100 d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#dashboardMenu"
                aria-expanded="false"
              >
                <span>
                  <i className="bi bi-clipboard-data me-2"></i> Dashboard
                </span>
                <i className="bi bi-caret-down-fill"></i>
              </button>

              <div id="dashboardMenu" className="collapse mt-2 ps-3">
                <NavLink
                  to="/dashboard/customer"
                  className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-2"
                >
                  Customer Dashboard
                </NavLink>
                <NavLink
                  to="/dashboard/admin"
                  className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover"
                >
                  Admin Dashboard
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to=""
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-grid"></i>
            <span className="mx-1 fw-semibold">Overview</span>
          </NavLink>

          <NavLink
            to="/products"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-cart"></i>
            <span className="mx-1 fw-semibold">Products</span>
          </NavLink>

          <NavLink
            to=""
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-box"></i>
            <span className="mx-1 fw-semibold">Orders</span>
          </NavLink>

          <NavLink
            to=""
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-envelope"></i>
            <span className="mx-1 fw-semibold">Contact</span>
          </NavLink>

          <NavLink
            to=""
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-info-circle"></i>
            <span className="mx-1 fw-semibold">About</span>
          </NavLink>
        </nav>
        <div className="mt-auto">
          <button onClick={handleLogout} className="btn btn-outline-danger w-50">
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
