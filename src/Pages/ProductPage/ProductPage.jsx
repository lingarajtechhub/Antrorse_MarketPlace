// import { useState } from "react";
// import Mergereview from "../../components/Review/Mergereview";

// const ProductPage = () => {
//   // Define available sizes for the product
//   const sizes = ["XS", "S", "M", "L", "XL"];

//   // State to track the selected size
//   const [selectedSize, setSelectedSize] = useState("");

//   // Function to handle size selection
//   const handleSizeClick = (size) => {
//     setSelectedSize(size);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       {/* Container for product information */}
//       <div className="max-w-6xl   shadow-md p-4 mx-auto">
//         {/* Product layout with images, details, and actions */}
//         <div className="flex flex-col md:flex-row  justify-between">
//           {/* Product Images and Large Image */}
//           <div className="flex p-2 gap-5">
//             {/* Small Product Images */}
//             <div className="flex flex-col w-1/4 gap-2 ">
//               {/* Small product image placeholders */}
//               {Array.from({ length: 5 }, (_, index) => (
//                 <div className=" w-24 h-24">
//                   <img
//                     key={index}
//                     src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
//                     alt={`Product ${index + 1}`}
//                     className="w-full h-full  bg-white object-cover shadow rounded-md cursor-pointer"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Large Product Image */}
//             <img
//               src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
//               alt="Product"
//               className="w-[30rem] h-[80vh] bg-white flex-1 rounded-md"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="w-[30rem] p-2 h-[90vh] overflow-auto overflow-x-hidden   mt-4 md:mt-0 md:ml-4">
//             <div className="flex flex-col gap-6">
//               {/* Product Title */}
//               <p className="text-3xl font-bold mb-2">Shoes</p>

//               {/* Product Ratings */}
//               <div className="flex items-center mb-6">
//                 <ul className="flex mr-2">
//                   <li>
//                     <a href="#">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
//                       </svg>
//                     </a>
//                   </li>
//                 </ul>
//                 <p className="text-xs dark:text-gray-400 ">
//                   (2 customer reviews)
//                 </p>
//               </div>

//               {/* Product Price */}
//               <p className="inline-block text-4xl font-bold text-gray-700 dark:text-gray-400 ">
//                 <span>₹1000.99</span>
//                 <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
//                   ₹1500.99
//                 </span>
//               </p>

//               {/* Product Description */}
//               <p className="text-gray-600 mb-4">
//                 Product description goes here. Add any relevant details about
//                 the product.
//               </p>

//               {/* Product Colors */}
//               <div className="flex items-center mb-4">
//                 <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
//                   Colors:
//                 </h2>
//                 <div className="flex flex-wrap -mx-2 -mb-2">
//                   {/* Color buttons */}
//                   <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
//                     <div className="w-6 h-6 bg-cyan-300"></div>
//                   </button>
//                   <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
//                     <div className="w-6 h-6 bg-green-300 "></div>
//                   </button>
//                   <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
//                     <div className="w-6 h-6 bg-red-200 "></div>
//                   </button>
//                 </div>
//               </div>

//               {/* Product Size Selection */}
//               <div>
//                 <p className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">
//                   Select Size
//                 </p>
//                 {/* Size buttons */}
//                 <div className="flex justify-start gap-2 w-full mt-2">
//                   {sizes.map((size) => (
//                     <span
//                       key={size}
//                       onClick={() => handleSizeClick(size)}
//                       className={`p-2 text-center cursor-pointer w-16 border rounded-md ${
//                         selectedSize === size
//                           ? " ring-2 ring-blue-500"
//                           : "bg-gray-200"
//                       }`}
//                     >
//                       {size}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity Selection */}
//               <div className="w-32 mb-6">
//                 <label
//                   htmlFor=""
//                   className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
//                 >
//                   Quantity
//                 </label>
//                 {/* Quantity input with buttons */}
//                 <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
//                   <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
//                     <span className="m-auto text-2xl font-thin">-</span>
//                   </button>
//                   <input
//                     type="number"
//                     className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
//                     placeholder="1"
//                   />
//                   <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
//                     <span className="m-auto text-2xl font-thin">+</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Add to Cart and Buy Now Buttons */}
//               <div className="flex flex-wrap items-center  -mx-4 ">
//                 <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
//                   <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
//                     Add to Cart
//                   </button>
//                 </div>
//                 <div className="w-full px-4 lg:mb-0 lg:w-1/2">
//                   <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>

//               <Mergereview />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import StarRating from "../../components/StartRating/StartRating";


const ProductPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://themewagon.github.io/ashion/img/product/details/thumb-3.jpg",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/u/5/3/l-1-no-asaejk4717-arrow-original-imaghad62rg9rhhq.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/9/3/c/l-1-no-asaejk4717-arrow-original-imaghad6yzp4gnbx.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/4/e/m/l-1-no-asaejk4717-arrow-original-imaghad69hy4bhht.jpeg?q=70&crop=false",
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <section class="py-10 font-poppins ">
        <div class="max-w-7xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-6">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 ">
              <div className="sticky top-0 w-full flex overflow-hidden  m-4">
                <div className="flex-wrap    w-1/4 flex-col hidden mx-2 md:flex">
                  {images.map((imageUrl, index) => (
                    <div key={index} className="w-1/2 p-2 sm:w-full">
                      <a
                        className="block border border-gray-200 hover:border-sky-400"
                        href="#"
                      >
                        <img
                          className="object-contain w-full lg:h-28"
                          src={imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="relative mb-6 ml-4   h-[90vh] w-2/3 flex lg:mb-10 ">
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2 border-2 rounded-full p-2 bg-white shadow-md"
                    href="#"
                    onClick={prevImage}
                  >
                    {/* Left arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 bi bi-chevron-left "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </a>
                  <img
                    className="  object-contain  w-full lg:h-full"
                    src={images[currentIndex]}
                    alt=""
                  />
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2 border-2 rounded-full p-2 bg-white shadow-md"
                    href="#"
                    onClick={nextImage}
                  >
                    {/* Right arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5  bi bi-chevron-right "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* right section */}
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-8">
                <div class="mb-6 ">
                  <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide  md:text-2xl ">
                    Men Solid Bomber Jacket
                  </h2>
                  <div class="flex flex-wrap items-center mb-6">
                    <StarRating rating={4} />
                    <span>(123)</span>
                  </div>
                  <p class="inline-block text-2xl font-semibold text-red-800  ">
                    <span>Rs 1200</span>
                    <span class="ml-3 text-base font-normal text-gray-500 line-through ">
                      Rs 10,000
                    </span>
                  </p>
                  <p className="pt-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    minima aperiam dolore nam quos ducimus, earum quod
                    laboriosam animi nulla expedita. Soluta, illum.
                  </p>
                </div>
                {/* <div class="mb-6">
                  <h2 class="mb-2 text-lg font-bold text-gray-700 ">
                    System Specs :
                  </h2>
                  <div class="bg-gray-100  rounded-xl">
                    <div class="p-3 lg:p-5 ">
                      <div class="p-2 rounded-xl lg:p-6  bg-gray-50">
                        <div class="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-diagram-3 w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                  ></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 ">
                                  No. of cores
                                </p>
                                <h2 class="text-base font-semibold text-gray-700 ">
                                  12 Cores
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-gpu-card w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 ">
                                  Graphic
                                </p>
                                <h2 class="text-base font-semibold text-gray-700 ">
                                  Intel UHD
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="w-7 h-7 bi bi-cpu"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 ">
                                  Processor
                                </p>
                                <h2 class="text-base font-semibold text-gray-700">
                                  INTEL 80486
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-clock-history w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 ">
                                  Frequency
                                </p>
                                <h2 class="text-base font-semibold text-gray-700 ">
                                  3.5 GHz
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div class="mb-6 "></div>
                <div class="flex flex-wrap items-center mb-6">
                  <h2 className="text-lg mr-3">Quantity :</h2>
                  <div class="mb-4 mr-4 lg:mb-0">
                    <div class="w-28">
                      <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button class="w-20 h-full text-gray-600 bg-gray-100 border rounded-l outline-none cursor-pointer    hover:text-gray-700  hover:bg-gray-300">
                          <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          class="flex items-center  w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  border  focus:outline-none text-md hover:text-black"
                          placeholder="1"
                        />
                        <button class="w-20 h-full text-gray-600 bg-gray-100 border rounded-r outline-none cursor-pointer    hover:text-gray-700 hover:bg-gray-300">
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 lg:mb-0">
                    <button class="flex items-center justify-center w-full h-10  mr-2 text-gray-700  lg:w-11 hover:text-red-500  border rounded-full   ">
                      <IoHeartOutline className="text-xl w-6 h-7  " />
                    </button>
                  </div>
                  <a
                    href="#"
                    class="w-full px-4 py-3 text-center text-white  border border-600    bg-red-600 hover:text-gray-100 lg:w-1/3 rounded-xl"
                  >
                    Add to cart
                  </a>
                </div>
                <div class="flex gap-4 mb-6">
                  <a
                    href="#"
                    class="w-[90%] px-4 py-3 border-2 text-center bg-red-600 text-white rounded-xl"
                  >
                    Buy now
                  </a>
                </div>

                {/* last */}

                <div class="mb-4 flex">
                  <h2 class="mb-1 mr-8 text-md font-bold ">Avilable Color :</h2>
                  <div class="flex flex-wrap -mb-2">
                    <button class="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400 ">
                      <div class="w-6 h-6 bg-red-600 rounded-full"></div>
                    </button>
                    <button class="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400 ">
                      <div class="w-6 h-6 bg-green-600 rounded-full"></div>
                    </button>
                    <button class="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 ">
                      <div class="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    </button>
                    <button class="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                      <div class="w-6 h-6 rounded-full bg-sky-400"></div>
                    </button>
                  </div>
                </div>

                <div class=" mb-4   flex  ">
                  <h2 class="mb-1 mr-10 text-md font-bold ">Avilable Size :</h2>
                  <div class="flex flex-wrap -mb-2">
                    <button class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600  ">
                      XL
                    </button>
                    <button class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600   ">
                      S
                    </button>
                    <button class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                      M
                    </button>
                    <button class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                      XS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
