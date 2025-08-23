import React from "react";

function Cart() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card mb-3 shadow" style={{ minHeight: "100vh" }}>
            
                <div className="card-header bg-white border-0">
              <h3 className="text-primary text-center my-3"> 🛒 Shopping Cart</h3>
            </div>


            <div className="row g-0 align-items-center  px-3">
              <div className="col-md-5 text-center">
                <img
                  src="https://via.placeholder.com/250"
                  className="img-fluid rounded-start"
                  alt="Product"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Product title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-4" />
            <h3 className="text-primary text-center pb-2">Check Out</h3>
            <div className="table-responsive px-3">
              <table className="table table-striped table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>$50</td>
                    <td>
                      <button className="btn btn-sm btn-danger">
                       ✖ Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Product B</td>
                    <td>$75</td>
                    <td>
                      <button className="btn btn-sm btn-danger">
                      ✖  Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="m-4">
              <h4>Total: <span className="text-success">$125</span></h4>
              <div className="d-flex justify-content-start gap-3 mt-3">
                <button className="btn btn-outline-danger">
                ✖ Delete All
                </button>
                <button className="btn btn-primary">
                💵 Proceed Payment
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
