/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { Product } from "../services/apiServices";
import { NavLink } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterItem, setfilteritem] = useState("All");
  const [searchFilter, setsearchFilter] = useState("");

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

  const filterproducts = products.filter((p) => {
    const Category =
      filterItem === "All" ||
      p.category.toLowerCase() === filterItem.toLowerCase();

    const Search =
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.description.toLowerCase().includes(searchFilter.toLowerCase());

    return Category && Search;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
        <div className="spinner-border text-primary" role="status"></div>
        <h2 className="ms-3">Loading Products...</h2>
      </div>
    );
  }

  return (
    <div className="container my-5 col-md-9 ">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="my-4 ">
        <button
          className={`btn btn-link mx-2 fs-5 text-decoration-none ${
            filterItem === "All"
              ? "active text-primary fw-bold text-decoration-underline"
              : "text-muted"
          }`}
          onClick={() => setfilteritem("All")}
        >
          All
        </button>

        <button
          className={`btn btn-link mx-2 fs-5 text-decoration-none  ${
            filterItem === "men's clothing"
              ? "active text-primary fw-bold text-decoration-underline"
              : "text-muted"
          }`}
          onClick={() => setfilteritem("men's clothing")}
        >
          Men's
        </button>

        <button
          className={`btn btn-link mx-2 fs-5 text-decoration-none ${
            filterItem === "women's clothing"
              ? "active text-primary fw-bold text-decoration-underline"
              : "text-muted"
          }`}
          onClick={() => setfilteritem("women's clothing")}
        >
          Women's
        </button>

        <button
          className={`btn btn-link mx-2 fs-5 text-decoration-none ${
            filterItem === "jewelery"
              ? "active text-primary fw-bold text-decoration-underline"
              : "text-muted"
          }`}
          onClick={() => setfilteritem("jewelery")}
        >
          Jewelery
        </button>
      </div>
      <div className="d-flex my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search For Products . . . ."
          onChange={(e) => setsearchFilter(e.target.value)}
        />
        <button className="btn btn-primary ms-2">Search</button>
      </div>

      <div className="row">
        {filterproducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
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
                      View Product 
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
