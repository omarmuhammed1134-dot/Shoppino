import React from "react";

function CustomerDashboard() {
  const user = {
    name: "Admin",
    email: "Admin@example.com",
    role: "Customer",
  };

  return (
    <div className="container my-4 bg-light">
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
                  <h5 className="mt-2"> Items</h5>
                </div>
                <div>
                  <i className="bi bi-cash-stack fs-1 text-success"></i>
                  <h5 className="mt-2">Cash</h5>
                </div>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary">View Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
