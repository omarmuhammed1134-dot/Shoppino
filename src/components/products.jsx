/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { Product } from "../services/apiServices";
import { NavLink } from "react-router-dom";

function Products() {
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
          <div className="spinner-border text-primary" role="status">
          </div>
          <h2 className="ms-3">Loading Products...</h2>
        </div>
    );
  }


  return (
    <div className="container my-5 ">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="my-4 fs-5 ">
      <a className="text-muted text-decoration-none mx-2 " href="">All</a>
      <a className="text-muted text-decoration-none mx-2 " href="">Mens</a>
      <a className="text-muted text-decoration-none mx-2 " href="">Women's</a>
      <a className="text-muted text-decoration-none mx-2 " href="">Jewelery</a> 
      </div>
      <div className="d-flex my-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search For Products . . . ."
      />
      <button className="btn btn-primary ms-2">Search</button>
    </div>
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm bg-light">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "14px" }}
                >
                  {product.description.substring(0, 60)}...
                </p>
                <div className="mt-auto">
                  <h6 className="text-success fw-bold">${product.price}</h6>
                  <NavLink to={`/products/${product.id}`}>
                    <button className="btn btn-primary w-100">
                      Product details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
