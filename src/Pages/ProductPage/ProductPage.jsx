import { useState } from "react";
import Mergereview from "../../components/Review/Mergereview";

const ProductPage = () => {
  // Define available sizes for the product
  const sizes = ["XS", "S", "M", "L", "XL"];

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Function to handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Container for product information */}
      <div className="max-w-6xl   shadow-md p-4 mx-auto">
        {/* Product layout with images, details, and actions */}
        <div className="flex flex-col md:flex-row  justify-between">
          {/* Product Images and Large Image */}
          <div className="flex p-2 gap-5">
            {/* Small Product Images */}
            <div className="flex flex-col w-1/4 gap-2 ">
              {/* Small product image placeholders */}
              {Array.from({ length: 5 }, (_, index) => (
                <div className=" w-24 h-24">
                  <img
                    key={index}
                    src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                    alt={`Product ${index + 1}`}
                    className="w-full h-full  bg-white object-cover shadow rounded-md cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Large Product Image */}
            <img
              src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
              alt="Product"
              className="w-[30rem] h-[80vh] bg-white flex-1 rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-[30rem] p-2 h-[90vh] overflow-auto overflow-x-hidden   mt-4 md:mt-0 md:ml-4">
            <div className="flex flex-col gap-6">
              {/* Product Title */}
              <p className="text-3xl font-bold mb-2">Shoes</p>

              {/* Product Ratings */}
              <div className="flex items-center mb-6">
                <ul className="flex mr-2">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className="text-xs dark:text-gray-400 ">
                  (2 customer reviews)
                </p>
              </div>

              {/* Product Price */}
              <p className="inline-block text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                <span>₹1000.99</span>
                <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                  ₹1500.99
                </span>
              </p>

              {/* Product Description */}
              <p className="text-gray-600 mb-4">
                Product description goes here. Add any relevant details about
                the product.
              </p>

              {/* Product Colors */}
              <div className="flex items-center mb-4">
                <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Colors:
                </h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  {/* Color buttons */}
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-cyan-300"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-300 "></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-red-200 "></div>
                  </button>
                </div>
              </div>

              {/* Product Size Selection */}
              <div>
                <p className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">
                  Select Size
                </p>
                {/* Size buttons */}
                <div className="flex justify-start gap-2 w-full mt-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`p-2 text-center cursor-pointer w-16 border rounded-md ${
                        selectedSize === size
                          ? " ring-2 ring-blue-500"
                          : "bg-gray-200"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="w-32 mb-6">
                <label
                  htmlFor=""
                  className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                >
                  Quantity
                </label>
                {/* Quantity input with buttons */}
                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1"
                  />
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="flex flex-wrap items-center  -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                    Add to Cart
                  </button>
                </div>
                <div className="w-full px-4 lg:mb-0 lg:w-1/2">
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                    Buy Now
                  </button>
                </div>
              </div>

              <Mergereview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
