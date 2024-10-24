import React from "react";
import RoutesLayout from "./LayoutRoute/Routes";
import CartProvider from "./Context/Context";

function App() {
  return (
    <div>
      <CartProvider>
        <RoutesLayout />
      </CartProvider>
    </div>
  );
}

export default App;
