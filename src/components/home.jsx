import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0 ">
        <div className="card-body text-center p-5">
          <h2 className="fw-bold mb-3">👋 Welcome to Shoppino Dashboard</h2>
          <p className="text-muted fs-5">
            Wishing you a productive day and smooth store management.
          </p>
          <button className="btn btn-primary mt-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
