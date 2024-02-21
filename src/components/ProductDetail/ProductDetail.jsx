import { useEffect, useState } from "react";
import ProductDetailBody from "./ProductDetailBody";
import ProductDescription from "./ProductDescription";
import ProductMergeReview from "./ProductMergeReview";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductDetail = () => {
  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/app/product/getProductById/65ae481ded57623de6f4a5fd`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setproduct(() => data.result); // Set product data in state
        setIsLoading(() => false);
      } catch (error) {
        console.log(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/app/product/getProductById/65ae481ded57623de6f4a5fd`
        );
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div>
      {isLoading ? (
        <div> hi </div>
      ) : (
        <div className="flex flex-col gap-4">
          <ProductDetailBody product={product} />

          <div className=" flex flex-col gap-2 ">
            <h2 className="text-center text-4xl font-bold mt-4">
              Product Details
            </h2>
            <ProductDescription product={product} />
          </div>

          <div className=" flex flex-col gap-2">
            <h2 className="text-center text-4xl font-bold">Reviews</h2>
            <ProductMergeReview product={product} />
          </div>

          <div className=" flex flex-col gap-2">
            <h2 className="text-center text-4xl font-bold">
              Similar Products{" "}
            </h2>
            <RelatedProducts />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
