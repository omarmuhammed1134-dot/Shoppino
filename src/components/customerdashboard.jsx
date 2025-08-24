import React from "react";
import { NavLink } from "react-router-dom";

function CustomerDashboard() {
  const user = {
    name: "Customer",
    email: "Customer@example.com",
    role: "Customer",
    avatar: "https://via.placeholder.com/80",
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="card shadow-sm bg-light h-100">
            <div className="card-body text-center text-md-start">
              <h2 className="card-title text-primary mb-3">Profile</h2>
              <hr />
              <div className="d-flex flex-column flex-md-row align-items-center mb-3">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="rounded-circle me-md-3 mb-3 mb-md-0 border"
                  width="80"
                  height="80"
                />
                <div>
                  <h5 className="mb-1">{user.name}</h5>
                  <p className="text-muted mb-1">{user.email}</p>
                  <span className="badge bg-secondary">{user.role}</span>
                </div>
              </div>
              <div className="mt-4 d-grid d-md-block">
                <button className="btn btn-outline-primary w-100 w-md-auto">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card shadow-sm bg-light h-100">
            <div className="card-body text-center">
              <h2 className="card-title text-primary mb-3">Cart Overview</h2>
              <hr />
              <div className="d-flex justify-content-center justify-content-md-around text-center my-4 gap-4">
                <div>
                  <i className="bi bi-cart fs-1 text-primary"></i>
                </div>
                <div>
                  <i className="bi bi-cash-stack fs-1 text-success"></i>
                </div>
              </div>
              <div className="d-grid">
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
