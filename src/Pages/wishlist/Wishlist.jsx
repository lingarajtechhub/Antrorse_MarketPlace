import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const initialProducts = [
  {
    id: 1,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 2,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 3,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 4,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 5,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 6,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 7,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
  {
    id: 8,
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img1: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 499,
    maxprice: 699,
    discount: 20,
  },
];

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

const Wishlist = () => {
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id) => {
    setProducts((oldProducts) =>
      oldProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl font-bold my-4 sm:text-3xl">
        My Wishlist {products.length} items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="container mx-auto p-4 sm:px-6 lg:px-8 "
            key={product.id}
          >
            <div className="group my-10 flex w-full  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <div className="relative">
                <a
                  className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={product.img1}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={product.img2}
                    alt="product image"
                  />
                  <span className="absolute top-1 right-0 m-2 rounded-full  px-2 text-center text-sm font-medium text-white">
                    <RxCrossCircled
                      className="text-xl"
                      onClick={() => removeProduct(product.id)}
                    />
                  </span>
                </a>
              </div>
              <div className="mt-4 px-5 pb-5">
                <p className="text-sm font-semibold text-gray-700">
                  {product.brand}
                </p>
                <a href="#">
                  <h5 className="text-lg tracking-tight text-slate-900">
                    {product.type}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-2xl font-semibold text-slate-900 mr-1">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      {formatPrice(product.maxprice)}{" "}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-red-500">
                        ({product.discount}% OFF)
                      </span>
                    )}
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md backdrop-sepia-0 bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Move to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
