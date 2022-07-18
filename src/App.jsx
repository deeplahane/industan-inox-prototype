import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Navbar from "./components/Navbar/Navbar";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import WhyUsPage from "./pages/WhyUsPage/WhyUsPage";

const App = () => {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<>
          <Navbar page="home" />
          <LandingPage />
        </>} />
        <Route path="/cart" element={<> <Navbar />  <CartPage /> </>} />
        <Route path="/checkout" element={<> <Navbar />  <CheckoutPage /> </>} />
        <Route path="/product/:id" element={<> <Navbar />  <ProductPage /> </>} />
        <Route path="/products" element={<> <Navbar />  <ProductsPage /> </>} />
        <Route path="/contact-us" element={<> <Navbar />  <ContactUsPage /> </>} />
        <Route path="/why-us" element={<> <Navbar />  <WhyUsPage /> </>} />


        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

      </Routes>
    </div >
  );
};

export default App;
