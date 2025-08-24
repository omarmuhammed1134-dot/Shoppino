import React from "react";
import { useShoppingCart } from "../context/CartContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useShoppingCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card mb-3 shadow" style={{ minHeight: "100vh" }}>
            <div className="card-header bg-white border-0">
              <h3 className="text-primary text-center my-3">🛒 Shopping Cart</h3>
            </div>

            {cartItems.length === 0 ? (
              <h5 className="text-center text-muted my-5">
                Your cart is empty!
              </h5>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="row g-3 align-items-center px-3 mb-4 flex-column flex-md-row"
                  >
                    <div className="col-12 col-md-4 text-center">
                      <img
                        src={item.image}
                        className="img-fluid rounded"
                        alt={item.title}
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="card-body text-center text-md-start">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-muted">${item.price}</p>
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 flex-wrap">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ➖
                          </button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => addToCart(item)}
                          >
                            ➕
                          </button>
                          <button
                            className="btn btn-sm btn-danger ms-md-3"
                            onClick={() => deleteFromCart(item.id)}
                          >
                            ✖ Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="my-4" />

                <h3 className="text-primary text-center pb-2">Check Out</h3>
                <div className="m-4 text-center text-md-start">
                  <h4>
                    Total: <span className="text-success">${total.toFixed(2)}</span>
                  </h4>
                  <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mt-3">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        cartItems.forEach((item) => deleteFromCart(item.id))
                      }
                    >
                      ✖ Delete All
                    </button>
                    <button className="btn btn-primary">
                      💵 Proceed Payment
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
