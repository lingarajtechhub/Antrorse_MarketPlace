// Importing the 'useState' hook from React for managing state in functional components
import { useEffect, useState } from "react";

import Emptycart from "./emptycart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  manualIncrementQuantity,
  removeFromCart,
} from "../../redux/features/Cart/CartSlice";

// Functional component for the shopping cart page
const CartPage = () => {
  // State for managing the products in the cart

  const [taxpercent, setTaxpercent] = useState(15);
  const [cartCleared, setCartCleared] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const quantitiesInCart = useSelector((state) => state.cart.quantities);

  const dispatch = useDispatch();

  const increment = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const decrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  const manualIncrement = (productId, quantity) => {
    dispatch(
      manualIncrementQuantity({
        productId: productId,
        quantity: Number(quantity),
      })
    );
  };

  const removeItemFromCart = (product) => {
    console.log(product);
    dispatch(removeFromCart(product));
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    const totalItems = cartItems.map((item) => ({
      price: item.price,
      quantity: quantitiesInCart.find((product) => product.id === item.id)
        ?.quantity,
    }));

    const totalPrice = totalItems.reduce((acc, value) => {
      return acc + value.price * value.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };
  function tax(totalPrice) {
    const taxamt = ((taxpercent * totalPrice) / 100).toFixed(2);
    return taxamt;
  }

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartCleared(true)
  };

  useEffect(() => {}, []);
  // JSX code for the shopping cart page

  return cartItems.length === 0 ? (
    <Emptycart />
  ) : (
    <div className="bg-gray-100 py-8 ">
      <div className="flex-auto">
        <div className="container mx-auto px-14 flex items-center justify-between">
          <h1 className="text-2xl font-semibold mb-4">
            Your Cart {cartItems.length} Items
          </h1>
          <button
            className="bg-slate-300 font-bold px-4 py-1 text-md rounded-md"
            onClick={handleClearCart}
          >
            Clear items from cart
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Left side - Product list */}
        <div className="md:w-3/4 ">
          <div className="bg-white rounded-lg shadow-md p-6  max-w-5xl mx-auto mb-4 ">
            <div className="min-h-[20rem]">
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
                  {cartItems.map((product) => (
                    <tr key={product.id}>
                      {/* Product details */}
                      <td className="py-4 ">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4" src={product.image} />
                          <div className="flex flex-col flex-1 max-w-[80%]">
                            <p className="text-sm font-semibold text-gray-700">
                              {product.title || "Brand name unavailable"}
                            </p>
                            <span className="font-semibold">
                              {product.category}
                            </span>
                            <p className="text-xs text-gray-500 flex flex-col">
                              <span>
                                Color:{" "}
                                {product.color || "product color unavailable"}{" "}
                              </span>
                              <span>
                                size:{" "}
                                {product.size || "product size unavailable"}
                              </span>
                            </p>
                          </div>
                          <div>
                            {/* Remove product button */}
                            <p
                              className="text-xs leading-3 underline text-red-500 pr-5 cursor-pointer"
                              onClick={() => removeItemFromCart(product)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm  text-gray-500">
                        {product.seller || "seller info unavailable"}
                      </td>

                      {/* Price, Quantity, and Total */}
                      <td className="py-4">₹{product.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className={`border rounded-md py-2 px-4 mr-2 ${
                              quantitiesInCart.find(
                                (item) => item.id === product.id
                              )?.quantity === 1
                                ? "bg-slate-300"
                                : ""
                            } `}
                            onClick={() => decrement(product.id)}
                            disabled={
                              quantitiesInCart.find(
                                (item) => item.id === product.id
                              )?.quantity === 1
                            }
                          >
                            -
                          </button>
                          <input
                            className="text-center w-8"
                            type="number"
                            value={
                              quantitiesInCart.find(
                                (item) => item.id === product.id
                              )?.quantity || 1
                            }
                            onChange={(e) =>
                              manualIncrement(product.id, e.target.value)
                            }
                          />

                          <button
                            className={`border rounded-md py-2 px-4 mr-2 ${
                              quantitiesInCart.find(
                                (item) => item.id === product.id
                              )?.quantity === 5
                                ? "bg-slate-300"
                                : ""
                            } `}
                            onClick={() => increment(product.id)}
                            disabled={
                              quantitiesInCart.find(
                                (item) => item.id === product.id
                              )?.quantity === 5
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        ₹
                        {(
                          product.price *
                          (quantitiesInCart.find(
                            (item) => item.id === product.id
                          )?.quantity || 1)
                        ).toFixed(2)}
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
              <span>₹{tax(calculateSubtotal())}</span>
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
