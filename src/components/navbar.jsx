/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";

function Navbar() {
  const { cartQuantity } = useShoppingCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink to="/home" className="navbar-brand fs-3 text-primary fw-bold">
          🛍️ SHOPPINO
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item me-3">
              <NavLink to="#" className="nav-link">
                <i className="bi bi-bell fs-4"></i>
              </NavLink>
            </li>

            <li className="nav-item position-relative">
              <NavLink to="/cart" className="nav-link">
                <i className="bi bi-cart fs-4"></i>
                {cartQuantity > 0 && (
                  <span
                    className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-primary"
                    style={{ fontSize: "0.7rem", minWidth: "20px" }}
                  >
                    {cartQuantity}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
