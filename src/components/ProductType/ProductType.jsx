// import React from "react";
// import { CiMobile3 } from "react-icons/ci";
// import { MdLaptopMac } from "react-icons/md";
// import { IoShirtOutline, IoWatchOutline } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// const Category = [
//   {
//     id: 1,
//     name: "Mobile Phone",
//     items: "2311",
//     logo: <CiMobile3 />,
//   },
//   {
//     id: 2,
//     name: "Laptop and PC",
//     items: "2311",
//     logo: <MdLaptopMac />,
//   },
//   {
//     id: 3,
//     name: "Smartwatches",
//     items: "2311",
//     logo: <IoWatchOutline />,
//   },
//   {
//     id: 4,
//     name: "Clothing",
//     items: "2311",
//     logo: <IoShirtOutline />,
//   },

// ];
// const ProductType = () => {
//   return (
//     <div className=" rounded-md shadow-md m-2  w-full    border p-2">
//       <div className="flex justify-between border-b-2 mb-2   ">
//         <h1 className="font-bold text-lg m-3">Product Type</h1>
//         <div className="text-blue-900 ">
//           <span className="flex gap-2 text-center font-semibold text-lg m-3 cursor-pointer ">
//             <FaPlus className="mt-1" /> Add Category
//           </span>
//         </div>
//       </div>
//       <div className="flex  gap-3 flex-wrap  bg-white  cursor-pointer ">
//         {Category &&
//           Category.map((category) => (
//             <div className="bg-gray-200 px-2 py-1 flex   text-center  justify-between rounded-md  ">
//               <div className="  font-bold w-6 h-8 text-center rounded-sm ">
//                {category.logo}
//               </div>
//               <div>
//                 <h1 className="text-md font-bold">{category.name}</h1>

//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };
// export default ProductType;

import React, { useState } from "react";
// import Model from './Model';
import Model from "./Model";
import { CiMobile3 } from "react-icons/ci";
import { MdLaptopMac } from "react-icons/md";
import { IoShirtOutline, IoWatchOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

import { FaPlus } from "react-icons/fa6";

// ProductType.jsx

// ... (import statements)

const ProductType = () => {
  const Cat = [
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

  const [isModalVisible, setModalVisible] = useState(false);
  const [Category, setCategory] = useState(Cat);

  const handleToggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddProductCategory = (newCategory) => {
    const updatedCategory = [
      ...Category,
      { id: Category.length + 1, ...newCategory },
    ];
    setCategory(updatedCategory);
  };

  const handleDelete = (id) => {
    const updatedCategory = Category.filter((category) => category.id !== id);
    setCategory(updatedCategory);
  };

  return (
    <div className="rounded-md shadow-md m-2 mr-20 w-full border p-2 bg-white ">
      <div className="flex justify-between border-b-2 mb-2 ">
        <h1 className="font-bold text-lg m-3">Product Type</h1>
        <div className="text-blue-900 ">
          <button
            className="flex gap-2 text-center font-semibold text-lg m-3 cursor-pointer "
            onClick={handleToggleModal}
          >
            <FaPlus className="mt-1" /> Add Category
          </button>
        </div>
      </div>
      <div className="flex gap-2  flex-wrap   items-center cursor-pointer">
        {Category &&
          Category.map((category) => (
            <div
              key={category.id}
              className="px-2 py-1 bg-slate-200 flex items-center justify-center rounded-md  shadow-sm gap-2"
            >
              <div className="font-bold  w-6 h-8 flex items-center justify-center rounded-sm">
                {category.logo}
              </div>
              <div>
                <h1 className="text-md font-bold ">{category.name}</h1>
              </div>
              <IoMdCloseCircle
                size={"1.5rem"}
                className="text-red-600 "
                onClick={() => handleDelete(category.id)}
              />
            </div>
          ))}
      </div>

      {isModalVisible && (
        <Model
          handleToggleModal={handleToggleModal}
          handleAddProductCategory={handleAddProductCategory}
        />
      )}
    </div>
  );
};

export default ProductType;
