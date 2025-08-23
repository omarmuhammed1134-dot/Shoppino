/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <div className="container-fluid mx-5 pb-2">
          <NavLink to="/home" 
          className="navbar-brand fs-3 text-primary fw-bold">
            🛍️ SHOPPINO
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bell mx-2 fs-4"></i>
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" >
                  <i className="bi bi-person circle fs-4"></i>
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink to="/cart" className="nav-link" >
                   <i className="bi bi-cart fs-4"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
