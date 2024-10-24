import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../ApiService/Api";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../Context/Context";

function ProductDetails() {
  const { products, setProducts } = useContext(cartContext);
  const { id } = useParams();
  const [ProductDetails, setproductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setproductDetails(data);
      console.log(data);
    };
    fetchProductDetails();
  }, [id]);

  const onAddToCart = (prd) => {
    const existingProduct = products.find((product) => product.id === prd.id);

    if (existingProduct) {
      setProducts(
        products.map((product) =>
          product.id === prd.id
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product
        )
      );
    } else {
      setProducts([...products, { ...prd, quantity: 1 }]);
    }
  };

  return (
    <div className="product-details-container">
      <img src={ProductDetails.image} alt="image" className="product-image" />

      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>
        <p className="product-description">{ProductDetails.description}</p>
        <p className="product-price">{ProductDetails.price}</p>
        <button
          className="buy-now-button"
          onClick={() => onAddToCart(ProductDetails)}
        >
          Add to Cart
        </button>

        <Link to="/">
          <button className="go-back-home">Go back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
