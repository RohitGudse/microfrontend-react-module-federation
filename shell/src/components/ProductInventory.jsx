import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    stock: 15,
    price: 65000,
  },
  {
    id: 2,
    name: "Keyboard",
    stock: 40,
    price: 1200,
  },
  {
    id: 3,
    name: "Mouse",
    stock: 28,
    price: 700,
  },
  {
    id: 4,
    name: "Monitor",
    stock: 10,
    price: 15000,
  },
];

const ProductInventory = () => {
  const [products] = useState(initialProducts);

  return (
    <div className="inventory-container">
      <h2>Product Inventory</h2>

      <div className="inventory-grid">
        {products.map((product) => (
          <div className="inventory-card" key={product.id}>
            <h3>{product.name}</h3>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>

            <button className="inventory-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInventory;