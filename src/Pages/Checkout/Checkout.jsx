import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const addressOptions = [
    {
      id: 1,
      label: "123 Main St, CityA (Default)",
      deliveryTime: "Delivery: 2-7 Days",
    },
    {
      id: 2,
      label: "456 Oak St, CityB",
      deliveryTime: "Delivery: 3-5 Days",
    },
    // Add more addresses as needed
  ];

  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-15 xl:px-28">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-fit h-fit items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-4">
          <p className="text-lg font-medium">Order Summary</p>

          {/* order section */}
          <div className="mt-4 space-y-3 rounded-lg border  bg-white px-2 py-2 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-16 w-16 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-2">
                <span className="font-semibold text-sm">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400 text-sm">
                  42EU - 8.5US
                </span>
                <p className="text-sm font-bold ">&#8377;138.99</p>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-16 w-16 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-2">
                <span className="font-semibold text-sm">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400 text-sm">
                  42EU - 8.5US
                </span>
                <p className="mt-auto text-sm font-bold ">&#8377;238.99</p>
              </div>
            </div>
          </div>
        </div>

        {/* payment Details */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 ">
          <div className="">
            <div className="container mx-auto">
              <h1 className="text-lg  mb-4">Select your Address</h1>
              <form className="mt-2 grid gap-4">
                {/* <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
                for="radio_1"
              >
                
                <div className="ml-10">
                  <span className="mt-1 font-semibold text-sm">
                    Ekart Delivery
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-7 Days
                  </p>
                </div>
              </label>
            </div> */}
                <div>
                  {addressOptions.map((address) => (
                    <div key={address.id} className="relative mb-2">
                      <input
                        className="peer hidden"
                        id={`radio_${address.id}`}
                        type="radio"
                        name="radio"
                        checked={
                          selectedAddress && selectedAddress.id === address.id
                        }
                        onChange={() => handleAddressChange(address)}
                      />
                      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        className={`peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2 ${
                          selectedAddress && selectedAddress.id === address.id
                            ? "bg-gray-50"
                            : ""
                        }`}
                        htmlFor={`radio_${address.id}`}
                      >
                        <div className="ml-10">
                          <span className="mt-1 font-semibold text-sm">
                            {address.label}
                          </span>
                          <p className="text-slate-500 text-sm leading-6">
                            {address.deliveryTime}
                          </p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                {/* new div for the cart */}
              </form>
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-lg  text-gray-900">
                  &#8377;399.00
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-lg  text-gray-900">
                  +&#8377;8.00
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Discount</p>
                <p className="text-sm font-semibold text-gray-900">
                  -&#8377;200.00
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xl font-medium text-gray-900">Total</p>
              <p className="text-xl font-semibold text-gray-900">
                &#8377;408.00
              </p>
            </div>
          </div>
          <Link to="/orderCompleted" className=" flex flex-1 my-4 justify-center items-center w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
