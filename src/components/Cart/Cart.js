import React, { useContext } from "react";
import "./Cart.css";
import { cartContext } from "../../Context/Context";

function Cart() {
  const { products, setProducts , clearProduct} = useContext(cartContext);

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

 
  return (
    <div className="cart-container">
      <div className="cart-content">
        {products?.map((product) => (
          <div key={product.id} className="products-1">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>

            <button
              className="clear-btn"
              onClick={() => clearProduct(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
