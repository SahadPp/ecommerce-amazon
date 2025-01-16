import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import navigation from "../constants/navigation";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../components/Cart/Cart";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import SignUp from "../components/SignUp/SignUp";

function RoutesLayout() {
  const { home, products, aboutus, contactus } = navigation;
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path={home} element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path={products} element={<Products />} />
          <Route path={aboutus} element={<AboutUs />} />
          <Route path={contactus} element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
