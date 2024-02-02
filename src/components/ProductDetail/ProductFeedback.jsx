import React, { useState } from "react";
import StarRating from "../StartRating/StartRating";

const ProductFeedback = () => {
  const initialVisibleReviews = 2;
  const [visibleReviews, setVisibleReviews] = useState(initialVisibleReviews);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviewsData = [
    {
      name: "John Lester",
      rating: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.",
      date: "March 01, 2022",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      name: "John Lester",
      rating: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.",
      date: "March 01, 2022",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      name: "John Lester",
      rating: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.",
      date: "March 01, 2022",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      name: "John Lester",
      rating: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.",
      date: "March 01, 2022",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      name: "John Lester",
      rating: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.",
      date: "March 01, 2022",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
  ];

  // const showMoreReviews = () => {
  //   setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 4);
  // };

  // const hideReviews = () => {
  //   setVisibleReviews(initialVisibleReviews);
  //   setShowAllReviews(false);
  // };

  // return (
  //   <div>

  //     <h2 className="text-gray-600 text-xl  font-bold mt-8">User Reviews</h2>
  //   <div className="max-h-96 bg-white overflow-y-auto scrollbar-hide">
  //     <ul className="">
  //       {reviewsData.slice(0, showAllReviews ? reviewsData.length : visibleReviews).map((review, index) => (
  //         <li key={index} className="py-8 text-left px-4 m-2 border-b-2">
  //           <div className="flex items-start">
  //             <img
  //               className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
  //               src={review.image}
  //               alt=""
  //               />
  //             <div className="ml-6">
  //               <p className="text-sm font-bold text-gray-900">{review.name}</p>
  //               <div className="flex items-center">
  //                 <StarRating rating={review.rating} />
  //               </div>
  //               <p className="mt-2 text-base text-gray-900">{review.content}</p>
  //               <p className="mt-1 text-sm text-gray-600">{review.date}</p>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //     {reviewsData.length > initialVisibleReviews && (
  //       <div>
  //         {showAllReviews ? (
  //           <button
  //             onClick={hideReviews}
  //             className="bg-red-500 text-white px-4 py-2 rounded mt-4"
  //             >
  //             Hide
  //           </button>
  //         ) : (
  //           <button
  //           onClick={() => setShowAllReviews(true)}
  //           className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
  //           >
  //             Show All
  //           </button>
  //         )}
  //       </div>
  //     )}
  //   </div>

  //     </div>

  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 4);
  };

  const hideReviews = () => {
    setVisibleReviews(initialVisibleReviews);
    setShowAllReviews(false);
  };

  return (
    <div>
      <h2 className="text-blue-900 text-2xl font-bold mt-6">User Reviews</h2>
      <div className="max-h-96 bg-white overflow-y-auto overflow-x-hidden scrollbar-none">
        <ul className="">
          {reviewsData
            .slice(0, showAllReviews ? reviewsData.length : visibleReviews)
            .map((review, index) => (
              <li key={index} className="py-8 text-left px-4 m-2 border-b-2">
                <div className="flex items-start">
                  <img
                    className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                    src={review.image}
                    alt=""
                  />
                  <div className="ml-6">
                    <p className="text-sm font-bold text-gray-900">
                      {review.name}
                    </p>
                    <div className="flex items-center">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="mt-2 text-base text-gray-900">
                      {review.content}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        {reviewsData.length > initialVisibleReviews && (
          <div>
            {showAllReviews ? (
              <button
                onClick={hideReviews}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Hide
              </button>
            ) : (
              <button
                onClick={() => setShowAllReviews(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFeedback;
