import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { MdLaptopMac } from "react-icons/md";
import { IoShirtOutline, IoWatchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
const Category = [
  {
    id: 1,
    name: "Mobile Phone",
    items: "2311",
    logo: <CiMobile3 />,
  },
  {
    id: 2,
    name: "Laptop and PC",
    items: "2311",
    logo: <MdLaptopMac />,
  },
  {
    id: 3,
    name: "Smartwatches",
    items: "2311",
    logo: <IoWatchOutline />,
  },
  {
    id: 4,
    name: "Clothing",
    items: "2311",
    logo: <IoShirtOutline />,
  },
];
const ProductType = () => {
  return (
    <div className=" rounded-md shadow-md m-2  w-1/2 border p-2">
      <div className="flex justify-between border-b-2 mb-2 ">
        <h1 className="font-bold text-lg m-3">Product Type</h1>
        <div className="text-blue-900 ">
          <span className="flex gap-2 text-center font-semibold text-lg m-3 cursor-pointer ">
            <FaPlus className="mt-1" /> Add Category
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-3  cursor-pointer">
        {Category &&
          Category.map((category) => (
            <div className="bg-slate-100 p-4 flex  gap-y-8   flex-col justify-between rounded-md w-1/4">
              <div className="bg-white w-6 p-1 text-center rounded-sm ">
                {category.logo}
              </div>
              <div>
                <h1 className="text-md font-bold">{category.name}</h1>
                <span className="text-sm text-gray-500">
                  {category.items}items
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductType;
