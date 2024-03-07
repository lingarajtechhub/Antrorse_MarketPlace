import React from "react";

const PaymentSucess = () => {


  const handleOrderAPI = () =>{}

  useEffect(() => {}, []);

  return (
    <div className="mt-8 flex justify-center ">
      <div className="rounded-lg bg-white p-6 shadow-lg flex flex-col items-center ">
        <svg
          className="mb-4 h-8 w-8 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h1 className="mb-2 text-2xl font-bold">We received your order!</h1>
        <p className="mb-6 text-gray-600">
          Your order #2939993 is completed and ready to ship
        </p>

        <div className="flex items-center justify-between w-full px-4  gap-6">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Shipping Address</h2>
            <p className="text-gray-600">Wilson Baker</p>
            <p className="text-gray-600">
              4517 Washington Ave. Manchester, Kentucky 39495, USA
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Payment Info</h2>
            <p className="text-gray-600">Credit Card</p>
            <p className="text-gray-600">
              VISA <br />
              **** 4660
            </p>
          </div>
        </div>

        <div className="px-4">
          <h2 className="my-2 text-lg font-semibold">Order Items</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-lg object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-confirmation/3/product-1.png"
                  alt=""
                />
                <div className="ml-2">
                  <p className="text-lg font-semibold">
                    Apple Watch Series 7 - 44mm
                  </p>
                  <p className="text-gray-600">Golden</p>
                </div>
              </div>
              <p className="text-right text-lg font-semibold">$259.00</p>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-lg object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-confirmation/3/product-2.png"
                  alt=""
                />
                <div className="ml-2">
                  <p className="text-lg font-semibold">Beylob 90 Speaker</p>
                  <p className="text-gray-600">Space Gray</p>
                </div>
              </div>
              <p className="text-right text-lg font-semibold">$99.00</p>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-lg object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-confirmation/3/product-3.png"
                  alt=""
                />
                <div className="ml-2">
                  <p className="text-lg font-semibold">
                    Beoplay M5 Bluetooth Speaker
                  </p>
                  <p className="text-gray-600">Silver Collection</p>
                </div>
              </div>
              <p className="text-right text-lg font-semibold">$129.00</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2 w-full">
          <span className="text-lg">Total</span>
          <span className="font-bold text-lg">$699</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucess;
