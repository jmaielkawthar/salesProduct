import React from "react";

const CardList = ({ cartItems }) => {
  return (
    <div>
      <h3>Cart Items:</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product._id}>
                <td>{item.product.name_product}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CardList;
