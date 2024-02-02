import { useState } from "react";
import ProductDetailBody from "./ProductDetailBody";
import ProductDescription from "./ProductDescription";
import ProductMergeReview from "./ProductMergeReview";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductDetail = () => {
  // Define available sizes for the product
  const sizes = ["XS", "S", "M", "L", "XL"];

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Function to handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col gap-4">
      <ProductDetailBody />

      <div className=" flex flex-col gap-2 ">
        <h2 className="text-center text-4xl font-bold mt-4">
          Product Details
        </h2>
        <ProductDescription />
      </div>

      <div className=" flex flex-col gap-2">
        <h2 className="text-center text-4xl font-bold">Reviews</h2>
        <ProductMergeReview />
      </div>

      <div className=" flex flex-col gap-2">
        <h2 className="text-center text-4xl font-bold">RelatedProducts </h2>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
