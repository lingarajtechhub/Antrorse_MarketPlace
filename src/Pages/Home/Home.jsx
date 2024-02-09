import React from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import CTA from "../../components/CTA/CTA";
import Hero from "../../components/Hero/Hero";
import ServiceBar from "../../components/ServiceBar/ServiceBar";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import Banner from "../../components/marketingbanner/Banner";
import Category from "../../components/Category/Category";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceBar />
      <Category />
      <FeaturedProduct />
      <CTA />
      <Banner />
      <FeaturedProducts />
      <FooterBanner />
    </>
  );
};

export default Home;
