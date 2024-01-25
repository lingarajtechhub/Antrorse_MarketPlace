// Importing the 'useState' hook from React for managing state in functional components
import { useState } from "react";

import Emptycart from "./emptycart";
import { Link } from "react-router-dom";
// Initial products data
const initialProducts = [
  {
    id: 1,
    seller: "SneakersMafia",
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    price: 1900,
    maxprice: 2699,
    discount: 20,
  },
  {
    id: 2,
    seller: "ShoesAdda",
    brand: "Adidas",
    type: "Adidas Air MX Super 2600-Red",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1499,
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    maxprice: 1699,
    discount: 20,
  },
  {
    id: 3,
    seller: "SneakersMafia",
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    price: 1900,
    maxprice: 2699,
    discount: 20,
  },
  {
    id: 4,
    seller: "ShoesAdda",
    brand: "Adidas",
    type: "Adidas Air MX Super 2600-Red",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1499,
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    maxprice: 1699,
    discount: 20,
  },
  {
    id: 5,
    seller: "SneakersMafia",
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    price: 1900,
    maxprice: 2699,
    discount: 20,
  },
  {
    id: 6,
    seller: "ShoesAdda",
    brand: "Adidas",
    type: "Adidas Air MX Super 2600-Red",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1499,
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    maxprice: 1699,
    discount: 20,
  },
  {
    id: 7,
    seller: "SneakersMafia",
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    price: 1900,
    maxprice: 2699,
    discount: 20,
  },
  {
    id: 8,
    seller: "ShoesAdda",
    brand: "Adidas",
    type: "Adidas Air MX Super 2600-Red",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1499,
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    maxprice: 1699,
    discount: 20,
  },
  {
    id: 9,
    seller: "SneakersMafia",
    brand: "Nike",
    type: "Nike Air MX Super 2500-Red",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b",
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    price: 1900,
    maxprice: 2699,
    discount: 20,
  },
  {
    id: 10,
    seller: "ShoesAdda",
    brand: "Adidas",
    type: "Adidas Air MX Super 2600-Red",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1499,
    color: ["white", "orange", "black", "red", "green", "blue", "yellow"],
    size: ["s", "m", "L", "xL", "xxl"],
    maxprice: 1699,
    discount: 20,
  },
];

// Functional component for the shopping cart page
const CartPage = () => {
  // State for managing the products in the cart
  const [products, setProducts] = useState(initialProducts);

  // Function to remove a product from the cart based on its 'id'
  const removeProduct = (id) => {
    setProducts((oldProducts) =>
      oldProducts.filter((product) => product.id !== id)
    );
  };
  const [quantities, setQuantities] = useState({});

  const increment = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return products.reduce(
      (acc, product) => acc + product.price * (quantities[product.id] || 1),
      0
    );
  };

  // JSX code for the shopping cart page

  return products.length === 0 ? (
    <Emptycart />
  ) : (
    <div className="bg-gray-100 py-8 ">
      <div className="flex-auto">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-semibold mb-4">
            Your Cart {products.length} Items
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left side - Product list */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="max-h-[40rem] overflow-y-scroll ">
              <table className="w-full">
                {/* Table header */}
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Seller</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>

                {/* Table body - mapping through products */}
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      {/* Product details */}
                      <td className="py-4">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4" src={product.img} />
                          <div className="flex-col">
                            <p className="text-sm font-semibold text-gray-700">
                              {product.brand}
                            </p>
                            <span className="font-semibold">
                              {product.type}
                            </span>
                            <p className="text-md text-gray-500">
                              Color: {product.color[0]} size: {product.size[0]}
                            </p>
                          </div>
                          <div>
                            {/* Remove product button */}
                            <p
                              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                              onClick={() => removeProduct(product.id)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-md text-gray-500">
                        {product.seller}
                      </td>

                      {/* Price, Quantity, and Total */}
                      <td className="py-4">₹{product.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => decrement(product.id)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">
                            {" "}
                            {quantities[product.id] || 1}
                          </span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => increment(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        ₹{product.price * (quantities[product.id] || 1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right side - Summary and Checkout */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Summary details */}
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>₹1.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₹0.00</span>
            </div>
            <hr className="my-2" />

            {/* Promo code input */}
            <div>
              <span className="font-bold"> Apply Promo code</span>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter discount code"
                  className="bg-slate-100 px-4 py-2 rounded-md border-2 border-slate-600"
                />
                <span className="bg-black px-4 py-2 rounded-md text-white hover:bg-slate-400 hover:text-black">
                  Apply
                </span>
              </div>
            </div>
            <hr className="my-2" />

            {/* Total and Checkout button */}
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">
                ₹{calculateSubtotal() + 1} {/* Taxes */}
              </span>
            </div>
            <Link
              to="/checkout"
              className="bg-blue-500 flex flex-1 text-center justify-center text-white py-2 px-4 rounded-lg "
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the component as the default export
export default CartPage;
