import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

 if (loading) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center  min-vh-100 w-100">
      <div className="spinner-border text-primary " role="status"></div>
      <h2 className="text-muted fw-semibold">Loading...</h2>
    </div>
  );
}
  if (!product) {
    return <p className="text-center mt-5">Product not found!</p>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4 p-5 bg-light ">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">{product.title}</h2>
            <p className="text-muted">{product.description}</p>

            <div className="mb-3">
              <span className="badge bg-secondary me-2">
                Category: {product.category}
              </span>
            </div>

            <h3 className="text-success fw-bold mb-4">${product.price}</h3>

            <div className="d-flex gap-3">
              <NavLink to={`/cart/${product.id}`}>
                <button className="btn btn-primary px-4">
                  <i className="bi bi-cart me-2"></i>
                  Add to Cart
                </button>
              </NavLink>

              <button className="btn btn-outline-secondary px-4">
                <i className="bi bi-bag me-2"></i>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
