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
      <h2 className="mb-4 text-primary">Admin Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-sm text-center p-3">
            <h5>Total Products</h5>
            <h3 className="text-primary">{totalProducts}</h3>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3">Products List</h4>
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Num</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th style={{ width: "150px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product ,index) => (
                <tr key={product.id}>
                    <td className="text-center">
                        {index +1}
                    </td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      width="50"
                      height="50"
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
