import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

import StarRating from "../StartRating/StartRating";

const ProductDetailBody = ({ product }) => {
  const prodcutDetail = product;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  const handleSmallImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className=" flex justify-center  ">
      <div className="grid grid-cols-2  gap-4 max-w-7xl max-h-[80vh] overflow-hidden ">
        <div className=" px-4 bg-white md:mb-0 flex  gap-2 ">
          <div className="flex flex-col    w-1/5 items-center gap-4 mx-2 md:flex">
            {prodcutDetail.images
              ? prodcutDetail.images.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="w-20 h-28 flex items-center justify-center gap-4 hover:border-sky-400"
                    onClick={() => handleSmallImageClick(index)}
                  >
                    <img
                      className="object-cover h-[100%] w-[100%] "
                      src={imageUrl}
                      alt={imageUrl}
                    />
                  </div>
                ))
              : null}
          </div>

          <div className="relative flex items-center justify-center h-full  w-4/5 ">
            <a
              className="absolute left-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 cursor-pointer border-2 rounded-full p-2 mt-2 bg-white shadow-md z-10"
              href="#"
              onClick={prevImage}
            >
              {/* Left arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-5 h-5 bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                ></path>
              </svg>
            </a>

            <img
              className="object-cover max-h-full mx-auto transition-transform duration-500 ease-in-out transform scale-100 z-0"
              src={prodcutDetail.images[currentIndex]}
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
                className="w-5 h-5 bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* right section */}
        <div className=" bg-white px-4 ">
          <div className="lg:pl-6">
            <div className="mb-6 ">
              <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide  md:text-2xl ">
                {/* Men Solid Bomber Jacket */}
                {prodcutDetail.product_name}
              </h2>
              <div className="flex flex-wrap items-center mb-6">
                <StarRating rating={4} />
                <span>(123)</span>
              </div>
              <p className="inline-block text-2xl font-semibold text-red-800  ">
                <span>Rs {prodcutDetail.price}</span>
                <span className="ml-3 text-base font-normal text-gray-500 line-through ">
                  Rs {prodcutDetail.oldprice}
                </span>
              </p>
              <p className="pt-2 text-gray-500">{prodcutDetail.description}</p>
            </div>
            {/* <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 ">
                    System Specs :
                  </h2>
                  <div className="bg-gray-100  rounded-xl">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6  bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-diagram-3 w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                  ></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 ">
                                  No. of cores
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 ">
                                  12 Cores
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-gpu-card w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 ">
                                  Graphic
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 ">
                                  Intel UHD
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="w-7 h-7 bi bi-cpu"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 ">
                                  Processor
                                </p>
                                <h2 className="text-base font-semibold text-gray-700">
                                  INTEL 80486
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-clock-history w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 ">
                                  Frequency
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 ">
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

            <div className="mb-6 "></div>
            <div className="flex flex-wrap items-center mb-6">
              <h2 className="text-lg mr-3">Quantity :</h2>
              <div className="mb-4 mr-4 lg:mb-0">
                <div className="w-28">
                  <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                    <button
                      className="w-20 h-full text-gray-600 bg-gray-100 border rounded-l outline-none cursor-pointer    hover:text-gray-700  hover:bg-gray-300"
                      onClick={() =>
                        quantity > 1 ? setQuantity(quantity - 1) : 1
                      }
                    >
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center  w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  border  focus:outline-none text-md hover:text-black"
                      placeholder="1"
                      value={quantity}
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                    <button
                      className="w-20 h-full text-gray-600 bg-gray-100 border rounded-r outline-none cursor-pointer    hover:text-gray-700 hover:bg-gray-300"
                      onClick={() =>
                        quantity < 20 ? setQuantity(quantity + 1) : 20
                      }
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4 lg:mb-0">
                <button className="flex items-center justify-center w-full h-10  mr-2 text-gray-700  lg:w-11 hover:text-red-500  border rounded-full   ">
                  <IoHeartOutline className="text-xl w-6 h-7  " />
                </button>
              </div>
              <a
                href="#"
                className="w-full px-4 py-3 text-center text-white  border border-600    bg-red-600 hover:text-gray-100 lg:w-1/3 rounded-xl"
                // onClick={()=>handleCartClick()}
              >
                Add to cart
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-[90%] px-4 py-3 border-2 text-center bg-red-600 text-white rounded-xl"
              >
                Buy now
              </a>
            </div>

            {/* last */}

            <div className="mb-4 flex">
              <h2 className="mb-1 mr-8 text-md font-bold ">Avilable Color :</h2>
              <div className="flex flex-wrap -mb-2">
                {/* {prodcutDetail.spectification.clothing.color.map(
                  (colorOption, index) => (
                    <button
                      key={colorOption}
                      className="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400"
                      style={{ backgroundColor: colorOption }}
                    >
                      <div className="w-4 h-4 rounded-full"></div>
                    </button>
                  )
                )} */}

                {/* <button className="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400 ">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </button>
                <button className="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400 ">
                  <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                </button>
                <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 ">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                </button>
                <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                  <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                </button> */}
              </div>
            </div>

            <div className=" mb-4   flex  ">
              <h2 className="mb-1 mr-10 text-md font-bold ">Avilable Size :</h2>
              <div className="flex flex-wrap -mb-2">
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600  ">
                  XL
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600   ">
                  S
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                  M
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 ">
                  XS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailBody;
