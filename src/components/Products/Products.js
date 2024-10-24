import React, { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { getAllproducts } from "../../ApiService/Api";

function Products() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllproducts();
      setproducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-item">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="Product" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">$ {product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>
            <button>Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
