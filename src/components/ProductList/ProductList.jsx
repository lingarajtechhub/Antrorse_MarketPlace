import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemsInCart = useSelector((state) => state.cart.cartItems);
  console.log(itemsInCart);

  const fetchData = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setProducts(() => response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-white  text-gray-700 p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-4  p-4 ">
          {isLoading
            ? Array.from({ length: 9 }, (_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product}  inCart = {product.id} />
              ))}
        </div>
      </section>

      <Pagination />
    </>
  );
};

export default ProductList;
