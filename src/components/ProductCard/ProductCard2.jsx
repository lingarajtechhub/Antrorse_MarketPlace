import React from "react";

const ProductCard2 = () => {
  return (
    <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
      <div className="mx-auto">
        <div>
          <div className="flex bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="relative flex-none w-24 md:w-48">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png"
                alt="shopping image"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                  Product name
                </h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                  $110.00
                </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                  In stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <div className="flex space-x-2">
                  <label className="text-center">
                    <input
                      type="radio"
                      className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600"
                      name="size"
                      value="xs"
                    />
                    XS
                  </label>
                  <label className="text-center">
                    <input
                      type="radio"
                      className="flex items-center justify-center w-6 h-6"
                      name="size"
                      value="s"
                    />
                    S
                  </label>
                  <label className="text-center">
                    <input
                      type="radio"
                      className="flex items-center justify-center w-6 h-6"
                      name="size"
                      value="m"
                    />
                    M
                  </label>
                  <label className="text-center">
                    <input
                      type="radio"
                      className="flex items-center justify-center w-6 h-6"
                      name="size"
                      value="l"
                    />
                    L
                  </label>
                  <label className="text-center">
                    <input
                      type="radio"
                      className="flex items-center justify-center w-6 h-6"
                      name="size"
                      value="xl"
                    />
                    XL
                  </label>
                </div>
                <a
                  href="#"
                  className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300"
                >
                  Size Guide
                </a>
              </div>
              <div className="flex mb-4 text-sm font-medium">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Buy now
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Free shipping on all continental US orders.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
