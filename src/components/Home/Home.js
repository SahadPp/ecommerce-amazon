import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { getAllproducts } from "../../ApiService/DummyApi";
import { cartContext } from "../../Context/Context";

function Home() {
  const { searchQuery } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllproducts();
        setProducts(data.products);
        setFilteredProducts(data.products); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <>
      <Banner />

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <h2>{product.title}</h2>
                <p>
                  <span className="price">$ {product.price}</span>
                </p>
              </div>
            ))
          ) : (
            <p>No products found for "{searchQuery}".</p>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
