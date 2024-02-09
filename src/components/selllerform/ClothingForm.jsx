import React, { useState } from "react";
import Modal from "../Modal/Modal";
function ClothingForm({ product, handleChange }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newSize, setNewSize] = useState("");
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "XL"]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [suggestions, setSuggestions] = useState([
    { value: "shirt", label: "Shirt" },
    { value: "jeans", label: "Jeans" },
    { value: "mobile", label: "Mobile" },
    { value: "laptop", label: "Laotop" },
    { value: "watch", label: "Watch" },
    { value: "jacket", label: "Jeans" },
    { value: "joggers", label: "Joogers" },
    // Add more suggestions as needed
  ]);

  const handleSizeClick = (size) => {
    // Toggle selection of sizes
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleAddSizeClick = (newSize) => {
    // Add new size to the sizes array
    if (newSize.trim() !== "" && !sizes.includes(newSize)) {
      setSizes([...sizes, newSize]);
      setNewSize("");
    }
  };

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleChangecolor = (e) => {
    setColor(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (color.trim() !== "") {
      setColors([...colors, color.trim()]);
      setColor("");
    }
  };

  const onCancel = () => {
    setIsInputVisible(false);
  };

  return (
    <div>
      <div className=" mx-auto mt-6 p-6   bg-white rounded-md shadow-sm  border ">
        <h2 className="text-lg text-start font-bold mb-6">
          Product Information
        </h2>
        <form>
          <div className="">
            <label
              className="text-start block text-gray-700 text-md    mb-2"
              htmlFor="productName"
            >
              Product Category
            </label>
            <input
              type="text"
              id="productType"
              name="productType"
              // value={product.productType}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md placeholder:text-xs"
            />
            <div className="flex gap-x-2">
              <div className="text-start flex flex-col w-full">
                <label
                  className="block text-gray-700 text-md  mb-2"
                  htmlFor="productName"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  // value={product.discount}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-x-2">
              <div className="text-start w-full">
                <label
                  className="block text-gray-700 text-md mb-2"
                  htmlFor="material"
                >
                  Material
                </label>
                <input
                  type="text"
                  id="material"
                  name="material"
                  // value={product.productName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />

                {/* <CreatableSelect
                  isMulti
                  options={suggestions}
                  value={product.tags || product.tags.value}
                  styles={colourStyles}
                  onChange={(selectedOptions) =>
                    handleChangetag(selectedOptions)
                  }
                  onCreateOption={handleCreateTag}
                /> */}
              </div>
            </div>

            {/* //size */}

            <div>
              <p className="block text-gray-700 text-md mb-2">Select Size</p>

              {/* Size buttons */}
              <div className="flex flex-col justify-start gap-2 w-full mt-2">
                {sizes.map((size) => (
                  <div className="w-full flex gap-2">
                    <span
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`p-1 text-center cursor-pointer w-12 border rounded-md ${
                        selectedSizes.includes(size)
                          ? "ring-2 ring-blue-500 bg-gray-200"
                          : "bg-gray-200"
                      }`}
                    >
                      {size}
                    </span>
                    <input
                      disabled={selectedSizes.includes(size)}
                      type="number"
                      defaultValue={1}
                      className={`px-2 ring-2 ring-gray-200 bg-gray-200 rounded-md ${
                        selectedSizes.includes(size)
                          ? "ring-blue-200 bg-white "
                          : ""
                      } `}
                    />
                  </div>
                ))}
              </div>

              {/* Button to add a new size */}
              <button
                onClick={() => setIsInputVisible(true)}
                className="mt-2 p-2  text-black rounded-md 0"
              >
                + Add Size
              </button>

              {isInputVisible ? (
                <Modal
                  onCancel={onCancel}
                  onClose={onCancel}
                  heading="custom size"
                  placeholderText="Enter custom size"
                  customSize={handleAddSizeClick}
                />
              ) : null}
              {/* Input box to add a new size */}
              {/* {isInputVisible && (
                <div className="mt-2 flex">
                  <input
                    type="text"
                    placeholder=""
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                    className="p-2 border rounded-md mr-2 w-1/2"
                  />
                  <button
                    onClick={handleAddSizeClick}
                    className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600  w-1/2 "
                  >
                    Add Size
                  </button>
                </div>
              )} */}
            </div>

            <div className="text-start w-full">
              <label
                className="block text-gray-700 text-md mb-2"
                htmlFor="color"
              >
                Color
              </label>

              <div className="flex items-center justify-center gap-4">
                {/* Text input for entering color */}
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={color}
                  onChange={handleChangecolor}
                  // onKeyDown={handleKeyPress}
                  placeholder="Enter hex code or use color picker"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />

                {/* Color picker */}
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="p-1 h-14 w-14 rounded-md block bg-white border border-gray-800 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              {/* Display selected colors */}
              <div className="mt-2 ml-2">
                {colors.map((c, index) => (
                  <div key={index} className="inline-block relative">
                    <div
                      className="p-2 w-8 h-8 rounded-md ring-2 m-1 color-square"
                      style={{
                        backgroundColor: `${c}`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClothingForm;
