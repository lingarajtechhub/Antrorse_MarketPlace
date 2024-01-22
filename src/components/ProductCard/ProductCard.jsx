import React from "react";
import StarRating from "../StartRating/StartRating";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoHeartSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/Cart/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  

  const addItem = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
      <div
        className="flex items-center justify-center h-[11.25rem] overflow-hidden group-hover:scale-105 transition-transform"
        href="#"
      >
        <img
          className="object-contain h-full"
          src={product.image}
          alt={product.title}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </div>

      <div className="mt-4 px-3 pb-4 flex flex-col flex-1  ">
        <h5 className="text-md tracking-tight text-slate-900">
          {product.title}
        </h5>

        <div className=" flex flex-col flex-1 justify-end ">
          <div className="mt-2 mb-5 flex items-center justify-between gap-4 ">
            <p className="flex gap-2 items-end">
              <span className="text-2xl font-bold text-slate-900">
                &#8377;449
              </span>
              <span className="text-sm text-slate-900 line-through">
                &#8377;699
              </span>
            </p>
            <div className=" flex items-center">
              <StarRating rating={product.rating.rate} />
              <span>{`(${product.rating.count})`}</span>
            </div>
          </div>

          <div className="flex relative  items-center gap-3 group cursor-pointer transition-all ">
            <IoHeartSharp
              size={"2.75rem"}
              className=" absolute -left-20 opacity-0 scale-1  group-hover:-left-0 bg-slate-200 p-2  rounded-md group-hover:opacity-100 group-hover:scale-100  transition-all duration-700 ease-in-out "
            />
            <p
              className="flex items-center flex-1 justify-center gap-2   ml-12 rounded-md bg-slate-200 text-slate-800 font-bold px-5 py-2 text-center text-sm  hover:bg-gray-700 hover:text-white transition-all duration-700 ease-in-out"
              onClick={() => addItem(product)}
            >
              <HiOutlineShoppingCart size={"1.75rem"} />
              <span>Add to cart</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
