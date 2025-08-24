/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Product } from "../services/apiServices";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Product()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
        <div className="spinner-border text-primary" role="status"></div>
        <h2 className="ms-3">Loading Products...</h2>
      </div>
    );
  }

  const totalProducts = products.length;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary text-center text-md-start ">Admin Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card shadow-sm text-center p-3 h-100">
            <h5>Total Products</h5>
            <h3 className="text-primary">{totalProducts}</h3>
          </div>
        </div>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3 text-center text-md-start">Products List</h4>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th className="d-none d-md-table-cell">Category</th>
                  <th style={{ minWidth: "120px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="text-center">{index + 1}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="50"
                        height="50"
                        style={{ objectFit: "contain" }}
                      />
                    </td>
                    <td className="text-truncate" style={{ maxWidth: "150px" }}>
                      {product.title}
                    </td>
                    <td>${product.price}</td>
                    <td className="d-none d-md-table-cell">{product.category}</td>
                    <td>
                      <div className="d-flex flex-column flex-md-row gap-2">
                        <button className="btn btn-sm btn-warning">Edit</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
