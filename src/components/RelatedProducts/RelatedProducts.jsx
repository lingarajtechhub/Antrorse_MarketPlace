import React from "react";

const RelatedProducts = () => {
  return (
    <section
      id="Projects"
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-20 mt-10 mb-5"
    >
      {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-72 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <!--   🛑 Product card 1 - Ends Here  --> */}

      {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-72 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <!--   🛑 Product card 2- Ends Here  --> */}

      {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-72 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <!--   🛑 Product card 3 - Ends Here  --> */}

      {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-72 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <!--   🛑 Product card 4 - Ends Here  --> */}

       {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
       <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            class="h-72 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                $149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <a
                  href="#"
                  className="flex justify-center px-2 py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* <!--   🛑 Product card 4 - Ends Here  --> */}
    </section>
  );
};

export default RelatedProducts;
