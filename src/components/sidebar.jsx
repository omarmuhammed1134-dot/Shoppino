import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <div
        className="bg-light text-dark p-3 mt-4 card mx-2 shadow-lg"
        style={{ minWidth: "260px", height: "110vh" }}
      >
        <p className="fs-4">Dashboard</p>
        <hr />
        <nav className="nav flex-column ">
          <NavLink
            to="/home"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-house-door"></i>
            <span className="mx-1 fw-semibold">Home</span>
          </NavLink>

          <NavLink
            to="/Analytics"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-clipboard-data">
              <span className="mx-1 fw-semibold">Analytics</span>
            </i>
          </NavLink>
          <NavLink
            to="/overview"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
          >
            <i className="bi bi-grid"></i>
            <span className="mx-1 fw-semibold">Overview</span>
          </NavLink>
            <NavLink to="/products"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
            >
             <i className="bi bi-cart">
               <span className="mx-1 fw-semibold">Products</span> 
                </i>   
            </NavLink> 

            <NavLink to="/orders"
            className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3"
            >
                <i className="bi bi-box"><span className="mx-1 fw-semibold">Orders</span></i>
            </NavLink>
            <NavLink to = "/Contact" className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3">
            <i className="bi bi-envelope"><span className="mx-1 fw-semibold">Contact</span></i>
            </NavLink>
            <NavLink to="/About" className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3">
            <i className="bi bi-info-circle"><span className="mx-1 fw-semibold">About</span></i>
            </NavLink>

          <NavLink to="/settings" className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover mb-3">
            <i className="bi bi-gear"><span className="mx-1 fw-semibold">Setting</span></i>
          </NavLink>
         <NavLink to="/login" className="nav-link text-dark border rounded-pill px-3 py-2 custom-hover">
            <i className="bi bi-box-arrow-in-right"><span className="mx-1 fw-semibold">Login</span></i>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
