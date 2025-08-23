import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";


function Sidebar() {
  return (
    <>
      <div
        className="bg-light text-dark p-3 mt-4 card mx-2 shadow-lg"
        style={{ minWidth: "260px", height: "140vh" }}
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

 <div className="nav flex-column">

  <div className="nav-item dropdown mb-3">
    <button
      className="btn btn-light border rounded-pill px-3 py-2 w-100 d-flex justify-content-between align-items-center"
      data-bs-toggle="collapse"
      data-bs-target="#dashboardMenu"
      aria-expanded="false"
    >
      <span><i className="bi bi-clipboard-data me-2"></i> Dashboard</span>
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
