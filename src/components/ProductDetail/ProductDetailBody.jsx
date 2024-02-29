// import React, { useState } from "react";
// import { IoHeartOutline } from "react-icons/io5";

// import StarRating from "../StartRating/StartRating";

// const ProductDetailBody = ({ product,productReview }) => {
//   const prodcutDetail = product;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1);

//   const { color } =prodcutDetail.specifications.clothing ||null;
//   const { sizes } =prodcutDetail.specifications.clothing ||null;
//   const images=prodcutDetail.images

//   console.log(sizes,"sizes")

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleSmallImageClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const calculateAverageRating = (productReview) => {
//     const totalRating = productReview.reduce((total, review) => total + review.rating, 0);
//     return (totalRating / productReview.length).toFixed(1);
//   };

//   const averageRating = calculateAverageRating(productReview);

// let count=0;
// productReview.forEach(element => {
//   count++;
// });

//   return (
//     <section className=" flex justify-center  ">
//       <div className="grid grid-cols-2  gap-4 max-w-7xl max-h-[80vh] overflow-hidden ">
//         <div className=" px-4 bg-white md:mb-0 flex  gap-2 ">
//           <div className="flex flex-col    w-1/5 items-center gap-4 mx-2 md:flex">
//             {images
//               ? images.map((imageUrl, index) => (
//                   <div
//                     key={index}
//                     className="w-20 h-28 flex items-center justify-center gap-4 hover:border-sky-400"
//                     onClick={() => handleSmallImageClick(index)}
//                   >
//                     <img
//                       className="object-cover h-[100%] w-[100%] "
//                       src={imageUrl}
//                       alt={imageUrl}
//                     />
//                   </div>
//                 ))
//               : null}
//           </div>

//           <div className="relative flex items-center justify-center h-full  w-4/5 ">
//             <a
//               className="absolute left-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 cursor-pointer border-2 rounded-full p-2 mt-2 bg-white shadow-md z-10"
//               href="#"
//               onClick={prevImage}
//             >
//               {/* Left arrow SVG */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="w-5 h-5 bi bi-chevron-left"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
//                 ></path>
//               </svg>
//             </a>

//             <img
//               className="object-cover max-h-full mx-auto transition-transform duration-500 ease-in-out transform scale-100 z-0"
//               src={prodcutDetail.images[currentIndex]}
//               alt=""
//             />
//             <a
//               className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2 border-2 rounded-full p-2 bg-white shadow-md"
//               href="#"
//               onClick={nextImage}
//             >
//               {/* Right arrow SVG */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="w-5 h-5 bi bi-chevron-right"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* right section */}
//         <div className=" bg-white px-4 ">
//           <div className="lg:pl-6">
//             <div className="mb-6 ">
//               <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide  md:text-2xl ">
//                 {/* Men Solid Bomber Jacket */}
//                 {prodcutDetail.product_name}
//               </h2>
//               <div className="flex flex-wrap items-center mb-6">
//                 <StarRating rating={averageRating} />
//                 <span>({count})</span>
//               </div>
//               <p className="inline-block text-2xl font-semibold text-red-800  ">
//                 <span>Rs {prodcutDetail.discount}</span>
//                 <span className="ml-3 text-base font-normal text-gray-500 line-through ">
//                   Rs {prodcutDetail.price}
//                 </span>
//               </p>
//               <p className="pt-2 text-gray-500">{prodcutDetail.description}</p>
//             </div>

//             <div className="mb-6 "></div>
//             <div className="flex flex-wrap items-center mb-6">
//               <h2 className="text-lg mr-3">Quantity :</h2>
//               <div className="mb-4 mr-4 lg:mb-0">
//                 <div className="w-28">
//                   <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
//                     <button
//                       className="w-20 h-full text-gray-600 bg-gray-100 border rounded-l outline-none cursor-pointer    hover:text-gray-700  hover:bg-gray-300"
//                       onClick={() =>
//                         quantity > 1 ? setQuantity(quantity - 1) : 1
//                       }
//                     >
//                       <span className="m-auto text-2xl font-thin">-</span>
//                     </button>
//                     <input
//                       type="number"
//                       className="flex items-center  w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  border  focus:outline-none text-md hover:text-black"
//                       placeholder="1"
//                       value={quantity}
//                       onChange={(event) => setQuantity(event.target.value)}
//                     />
//                     <button
//                       className="w-20 h-full text-gray-600 bg-gray-100 border rounded-r outline-none cursor-pointer    hover:text-gray-700 hover:bg-gray-300"
//                       onClick={() =>
//                         quantity < 20 ? setQuantity(quantity + 1) : 20
//                       }
//                     >
//                       <span className="m-auto text-2xl font-thin">+</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-4 lg:mb-0">
//                 <button className="flex items-center justify-center w-full h-10  mr-2 text-gray-700  lg:w-11 hover:text-red-500  border rounded-full   ">
//                   <IoHeartOutline className="text-xl w-6 h-7  " />
//                 </button>
//               </div>
//               <a
//                 href="#"
//                 className="w-full px-4 py-3 text-center text-white  border border-600    bg-red-600 hover:text-gray-100 lg:w-1/3 rounded-xl"
//                 // onClick={()=>handleCartClick()}
//               >
//                 Add to cart
//               </a>
//             </div>
//             <div className="flex gap-4 mb-6">
//               <a
//                 href="#"
//                 className="w-[90%] px-4 py-3 border-2 text-center bg-red-600 text-white rounded-xl"
//               >
//                 Buy now
//               </a>
//             </div>

//             {/* last */}

//             <div className="mb-4 flex">
//               <h2 className="mb-1 mr-8 text-md font-bold ">Avilable Color :</h2>
//               <div className="flex flex-wrap -mb-2">
//                 {color.map(
//                   (colorOption, index) => (
//                     <button
//                       key={colorOption}
//                       className="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400"
//                       style={{ backgroundColor: colorOption }}
//                     >
//                       <div className="w-4 h-4 rounded-full"></div>
//                     </button>
//                   )
//                 )}

//               </div>
//             </div>

//             <div className=" mb-4   flex  ">
//               <h2 className="mb-1 mr-10 text-md font-bold ">Avilable Size :</h2>
//               <div className="flex flex-wrap -mb-2">

//                 {
//                   sizes.map((size,index)=>(
//                     <button  key={index} className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600  ">
//                    {size}
//                   </button>
//                   ))
//                 }

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailBody;

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoHeartOutline } from "react-icons/io5";
import StarRating from "../StartRating/StartRating";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart, removeFromCart } from "../../redux/features/Cart/CartSlice";
import { Link } from "react-router-dom";
const ProductDetailBody = ({ product, productId }) => {
  const productDetails = product[0]?.productDetails[0];
  const images = productDetails?.images || [];
  console.log(productDetails);
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
  const dispatch = useDispatch();

  const addItemToCart = async (product) => {
    try {
      // Check if the item is already in the cart
      const cartItems = getState().cart.items; // Assuming the state structure for cart is { items: [] }
      const isItemInCart = cartItems.some(
        (item) => item.productId === product._id
      );

      // If the item is already in the cart, show a message or handle it as needed
      if (isItemInCart) {
        toast.error("Item is already in the cart!");
        return;
      }

      // If the item is not in the cart, proceed to add it
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/app/cart/createCart`,
        { product_id: product._id },
        {
          headers: {
            token: localStorage.getItem("authToken"),
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(addToCart(product._id));
      toast.success("Item added to cart!");
    } catch (error) {
      console.error("already addes adding item to cart:", error);
      toast.error("Already added to cart!");
    }
  };

  const handleSmallImageClick = (index) => {
    setCurrentIndex(index);
  };
  const handleCartClick = () => {
    addItemToCart(product);
    // alertCartItemAdded("Item added to cart!");
  };

  // console.log(product[0])
  console.log("heloo");
  return (
    <section className=" flex justify-center">
      <div className="grid grid-cols-2 gap-4 max-w-7xl max-h-[80vh] overflow-hidden">
        <div className="px-4 bg-white md:mb-0 flex gap-2">
          <div className="flex flex-col w-1/5 items-center gap-4 mx-2 md:flex">
            {images &&
              images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="w-20 h-28 flex items-center justify-center gap-4 hover:border-sky-400"
                  onClick={() => handleSmallImageClick(index)}
                >
                  <img
                    className="object-cover h-[100%] w-[100%]"
                    src={imageUrl}
                    alt={imageUrl}
                  />
                </div>
              ))}
          </div>

          <div className="relative flex items-center justify-center h-full w-4/5">
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
        <div className="bg-white px-4">
          <div className="lg:pl-6">
            <div className="mb-6">
              <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide md:text-2xl">
                {productDetails?.name}
              </h2>
              <div className="flex flex-wrap items-center mb-6">
                <StarRating rating={productDetails?.ratingAVG} />
                <span>({productDetails?.count})</span>
              </div>
              <p className="inline-block text-2xl font-semibold text-red-800">
                <span>Rs {productDetails?.discount}</span>
                <span className="ml-3 text-base font-normal text-gray-500 line-through">
                  Rs {productDetails?.price}
                </span>
              </p>
              <p className="pt-2 text-gray-500">
                {productDetails?.description}
              </p>
            </div>

            <div className="mb-6"></div>
            <div className="flex flex-wrap items-center mb-6">
              <h2 className="text-lg mr-3">Quantity :</h2>
              <div className="mb-4 mr-4 lg:mb-0">
                <div className="w-28">
                  <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                    <button
                      className="w-20 h-full text-gray-600 bg-gray-100 border rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-300"
                      onClick={() =>
                        quantity > 1 ? setQuantity(quantity - 1) : 1
                      }
                    >
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none border focus:outline-none text-md hover:text-black"
                      placeholder="1"
                      value={quantity}
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                    <button
                      className="w-20 h-full text-gray-600 bg-gray-100 border rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300"
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
                <button className="flex items-center justify-center w-full h-10 mr-2 text-gray-700 lg:w-11 hover:text-red-500 border rounded-full">
                  <IoHeartOutline className="text-xl w-6 h-7" />
                </button>
              </div>
              <a
                href="#"
                className="w-full px-4 py-3 text-center text-white border border-600 bg-red-600 hover:text-gray-100 lg:w-1/3 rounded-xl"
                onClick={() => handleCartClick()}
              >
                Add to cart
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <Link
                to="/viewcart"
                className="w-[90%] px-4 py-3 border-2 text-center bg-red-600 text-white rounded-xl"
              >
                Buy now
              </Link>
            </div>

            <div className="mb-4 flex">
              <h2 className="mb-1 mr-8 text-md font-bold">Available Color :</h2>
              <div className="flex flex-wrap -mb-2">
                {productDetails?.variations.color.map((tag, index) => (
                  <button
                    key={index}
                    className="p-1 mb-2 mr-1 border border-transparent rounded-full hover:border-gray-400"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: tag }}
                    ></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 flex">
              <h2 className="mb-1 mr-10 text-md font-bold">Available Size :</h2>
              <div className="flex flex-wrap -mb-2">
                {Object.keys(productDetails.variations.sizes[0]).map(
                  (size, index) => (  
                    <button
                      key={index}
                      className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600"
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-right" containerStyle={{ zIndex: "99999" }} />
      </div>
    </section>
  );
};

export default ProductDetailBody;
