import React from "react";
import { NavLink } from "react-router-dom";

function CustomerDashboard() {
  const user = {
    name: "Customer",
    email: "Customer@example.com",
    role: "Customer",
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        
        <div className="col-md-5">
          <div className="card shadow-sm bg-light h-100">
            <div className="card-body">
              <h2 className="card-title text-primary mb-3">Profile</h2>
              <hr />

              <div className="d-flex align-items-center mb-3">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="rounded-circle me-3 border"
                  width="80"
                  height="80"
                />
                <div>
                  <h5 className="mb-1">{user.name}</h5>
                  <p className="text-muted mb-1">{user.email}</p>
                  <span className="badge bg-secondary">{user.role}</span>
                </div>
              </div>

              <div className="mt-4">
                <button className="btn btn-outline-primary w-45">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow-sm bg-light h-100">
            <div className="card-body">
              <h2 className="card-title text-primary mb-3">Cart Overview</h2>
              <hr />
              <div className="d-flex justify-content-around text-center my-4">
                <div>
                  <i className="bi bi-cart fs-1 text-primary"></i>
                </div>
                <div>
                  <i className="bi bi-cash-stack fs-1 text-success"></i>
                </div>
              </div>

              <div className="d-grid text-center">
                <NavLink to="/cart">
                <button className="btn btn-primary">View Cart</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
