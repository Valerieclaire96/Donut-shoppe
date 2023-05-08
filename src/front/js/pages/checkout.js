import React from "react";

export default function Checkout() {
  return (
    <div className="orderContainer">
      <div className="innerCheckoutContainer"> 
        <h2>Total:</h2>
        <h2>order date and time</h2>
        <ul>Order List</ul>
        <h2>Checkout with Paypal</h2>
        <button className="btn btn-info checkoutBtn">Paypal</button>
      </div>
    </div>
  );
}
