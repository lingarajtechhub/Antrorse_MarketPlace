import React, { useState } from "react";
import StarRating from "../StartRating/StartRating";
import ProductReviewForm from "./ProductReviewForm";

const ProductReview = ({ productReview, fetchData }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const rating = productReview[0].productDetails[0];
  console.log(rating);

  const calculateAverageRating = (rating) => {
    if (productReview.length === 0) return 0;
    const totalRating = productReview.reduce(
      (total, review) => total + review.rating,
      0
    );
    return (totalRating / productReview.length).toFixed(1);
  };

  const averageRating = calculateAverageRating(productReview);

  const calculateRatingCounts = (productReview) => {
    const counts = [0, 0, 0, 0, 0];
    productReview.forEach((review) => {
      counts[Math.floor(review.rating) - 1]++;
    });
    return counts.reverse(); // Display in decreasing order
  };

  const ratingCounts = calculateRatingCounts(productReview);

  return (
    <div className="flex bg-gray-50">
      <div className="w-full px-10 py-16">
        <div className="flex w-full flex-col">
          <div className="flex flex-col sm:flex-row">
            <h1 className="max-w-sm text-3xl font-bold text-blue-900">
              What people think <br />
              about tailwind
            </h1>
            <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 ml-20">
              <div className="flex h-16 items-center text-2xl font-bold text-blue-900">
                <StarRating rating={rating.ratingAVG} />
              </div>
              <p className="text-sm text-gray-500">Average User Rating</p>
            </div>
          </div>
          <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              {ratingCounts.map((count, index) => (
                <li
                  className="flex items-center text-sm font-medium"
                  key={index}
                >
                  <span className="w-3">{5 - index}</span>{" "}
                  {/* Display in decreasing order */}
                  <span className="mr-4 text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div
                    className={`mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300 ${
                      rating.count === 0 && "bg-white"
                    }`}
                  >
                    <div
                      className={`h-full ${
                        count === 0
                          ? "w-1"
                          : `w-${
                              (rating.count / productReview.length) * 100
                            }/12`
                      } bg-yellow-400`}
                    ></div>
                  </div>
                  <span className="w-3">{rating.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-36 rounded-full bg-blue-900 py-3 text-white font-medium"
            onClick={toggleForm}
          >
            Write a review
          </button>
          {showForm && (
            <ProductReviewForm toggleForm={toggleForm} fetchData={fetchData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
