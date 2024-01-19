// import ProductOne from "https://placehold.co/200x100?text=Hello+World";
// import ProductTwo from "https://placehold.co/200x100?text=Hello+World";
// import ProductThree from "https://placehold.co/200x100?text=Hello+World";
// import ProductFour from "https://placehold.co/200x100?text=Hello+World";

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white shadow-lg dark:border-slate-800 dark:bg-gray-800">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-6 border-t border-gray-200 py-4.5 px-4 dark:border-slate-800 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Product Image</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Sold</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Profit</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-gray-200 py-4.5 px-4 dark:border-slate-800 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3  flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full pr-8">
              <div className="flex items-center justify-center rounded-md   h-[6.125rem]  w-[10.75rem]   ">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                Apple Watch Series 7
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Electronics</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">&#8377;269</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">22</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-emerald-500">&#8377;45</p>
          </div>
        </div>
        <div className="grid grid-cols-6 border-t border-gray-200 py-4.5 px-4 dark:border-slate-800 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full pr-8">
              <div className="flex items-center justify-center rounded-md   h-[6.125rem]  w-[10.75rem]   ">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                Macbook Pro M1
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Electronics</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">&#8377;546</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">34</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-emerald-500">&#8377;125</p>
          </div>
        </div>
        <div className="grid grid-cols-6 border-t border-gray-200 py-4.5 px-4 dark:border-slate-800 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full pr-8">
              <div className="flex items-center justify-center rounded-md   h-[6.125rem]  w-[10.75rem]   ">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                Dell Inspiron 15
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Electronics</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">&#8377;443</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">64</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-emerald-500">&#8377;247</p>
          </div>
        </div>
        <div className="grid grid-cols-6 border-t border-gray-200 py-4.5 px-4 dark:border-slate-800 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full pr-8">
              <div className="flex items-center justify-center rounded-md   h-[6.125rem]  w-[10.75rem]   ">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                HP Probook 450
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Electronics</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">&#8377;499</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">72</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-emerald-500">&#8377;103</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
