import React from "react";

import Header from "./Header/Header";
import Features from "./Features/Features";
import Advantages from "./Advantages/Advantages";
import Products from "./Products/Products";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";
import Slider from "./slider/Slider";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Slider />
      <Features />
      <Advantages />
      <Products />
      <Newsletter />
      <Footer />
      <Copyright />
    </main>
  );
};

export default LandingPage;
