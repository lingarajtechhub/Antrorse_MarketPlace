import React, { useState } from "react";
function ClothingForm({ product, handleChange, handleSubmit }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newSize, setNewSize] = useState("");
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "XL"]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeClick = (size) => {
    // Toggle selection of sizes
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleAddSizeClick = () => {
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
    if (e.key === "Enter" && color.trim() !== "") {
      setColors([...colors, color.trim()]);
      setColor("");
    }
  };

  return (
    <div>
      <div className=" mx-auto mt-6 p-6   bg-white rounded-md shadow-sm  border ">
        <h2 className="text-lg text-start font-bold mb-6">
          Product Information
        </h2>
        <form onSubmit={handleSubmit}>
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
              </div>
            </div>

            {/* //size */}

            <div>
              <p className="block text-gray-700 text-md mb-2">Select Size</p>

              {/* Size buttons */}
              <div className="flex justify-start gap-2 w-full mt-2">
                {sizes.map((size) => (
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
                ))}
              </div>

              {/* Button to add a new size */}
              <button
                onClick={() => setIsInputVisible(!isInputVisible)}
                className="mt-2 p-2  text-black rounded-md 0"
              >
                + Add Size
              </button>

              {/* Input box to add a new size */}
              {isInputVisible && (
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
              )}
            </div>

            <div className="text-start w-full">
              <label
                className="block text-gray-700 text-md mb-2"
                htmlFor="color"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={color}
                onChange={handleChangecolor}
                onKeyDown={handleKeyPress}
                className="w-full border border-gray-300 p-2 rounded-md"
              />

              <div className="mt-2 ml-2">
                {colors.map((c, index) => (
                  <div key={index} className="inline-block relative">
                    {console.log(c)}
                    <div
                      className="p-2 m-1 "
                      style={{
                        backgroundColor: `${c}`,
                        width: "14px",
                        height: "14px",
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
