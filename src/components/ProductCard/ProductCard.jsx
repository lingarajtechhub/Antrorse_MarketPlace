import React, { useEffect, useState } from "react";
import StarRating from "../StartRating/StartRating";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoHeartSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/Cart/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/features/Wishlist/WishlistSlice";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product, inCart, inWishlist }) => {
  const [cartIconHovered, setCartIconHovered] = useState(false);
  const [wishlistIconHovered, setWishlistIconHovered] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };
  const removeItemFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const addItemToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  const removeItemFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
  };

  const alertCartItemAdded = (message) => {
    toast.success(message);
  };
  const alertCartItemRemoved = (message) => {
    toast.error(message);
  };

  const handleCartClick = () => {
    if (inCart) {
      removeItemFromCart(product);
      alertCartItemRemoved("Item removed from cart!");
    } else {
      addItemToCart(product);
      alertCartItemAdded("Item added to cart!");
    }
  };

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeItemFromWishlist(product);
      alertCartItemRemoved("Item removed from whislist!");
    } else {
      addItemToWishlist(product);
      alertCartItemAdded("Item added to wishlist!");
    }
  };

  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
      <Link to="/productdetail">
        <div className="flex items-center justify-center h-[11.25rem] p-2 overflow-hidden group-hover:scale-105 transition-transform">
          <img
            className="object-cover w-full h-full rounded-t-sm"
            src={product.images[0]}
            alt={product.name}
          />
          <span className="absolute top-1 left-1 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {`${product.discount}`}% OFF
          </span>
        </div>
      </Link>

      <div className="mt-4 px-3 pb-4 flex flex-col flex-1  ">
        <h5 className="text-md tracking-tight text-slate-900 h-12 line-clamp-2">
          {product.name}
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
              <StarRating rating={3} />
              <span>{`(${300})`}</span>
            </div>
          </div>

          <div className="flex relative  items-center gap-2 group cursor-pointer transition-all ">
            <span
              onMouseEnter={() => setWishlistIconHovered(true)}
              onMouseLeave={() => setWishlistIconHovered(false)}
              onClick={handleWishlistClick}
              className="bg-red-800 w-fit"
            >
              <IoHeartSharp
                size={"2.75rem"}
                className={`absolute -left-20 opacity-0 w-fit scale-1 ${
                  !inWishlist && !wishlistIconHovered
                    ? "text-blue-200"
                    : !inWishlist && wishlistIconHovered
                    ? "text-green-500"
                    : inWishlist && wishlistIconHovered
                    ? "text-red-400"
                    : "text-green-400"
                } group-hover:-left-0 -translate-y-1/2 bg-slate-200 p-2  rounded-md group-hover:opacity-100 group-hover:scale-100  transition-all duration-700 ease-in-out `}
              />
            </span>

            <p
              className={`flex items-center flex-1 justify-center gap-2   ml-12 rounded-md ${
                inCart ? "bg-green-400" : "bg-slate-200"
              }    text-slate-800 font-bold px-5 py-2 text-center text-sm   ${
                inCart && cartIconHovered
                  ? "hover:bg-red-400 "
                  : "hover:bg-blue-200 hover:text-slate-800"
              } hover:text-white`}
              onMouseEnter={() => setCartIconHovered(true)}
              onMouseLeave={() => setCartIconHovered(false)}
              onClick={() => handleCartClick()}
            >
              <HiOutlineShoppingCart size={"1.75rem"} />

              {inCart && cartIconHovered ? (
                <span className="text-nowrap w-fit">Remove from cart</span>
              ) : inCart ? (
                <span>Added to cart</span>
              ) : (
                <span>Add to cart</span>
              )}
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-right" containerStyle={{ zIndex: "99999" }} />
    </div>
  );
};

export default ProductCard;
