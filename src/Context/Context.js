import { createContext, useState } from "react";

const cart = {
  products: [],
  setProducts: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  count: 0,
  clearProduct: ()=>{}
};

export const cartContext = createContext(cart);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const clearProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <cartContext.Provider
      value={{
        products,
        searchQuery,
        setProducts,
        setSearchQuery,
        count: products?.length,
        clearProduct
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
