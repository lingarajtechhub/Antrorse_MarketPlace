import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <FeaturedProduct />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
