import { useState } from "react";
import Select from "react-select";
import "react-tagsinput/react-tagsinput.css";
import ProductType from "../../components/ProductType/ProductType";


const AddProd = () => {
  const [productImages, setProductImages] = useState([]);
  const [tags, setTags] = useState([]);

  const handleMultiImageChange = (e) => {
    const files = e.target.files;
    // Set the maximum allowed number of images
    const maxAllowedImages = 5;
    // Check if the total number of images after selecting is within the limit
    if (productImages.length + files.length > maxAllowedImages) {
      alert(
        `Please select up to ${maxAllowedImages - productImages.length
        } more images.`
      );
      // Optionally, you can clear the input to prevent exceeding the limit
      e.target.value = null;
      return;
    }

    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        file: file,
      }));

      setProductImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const [product, setProduct] = useState({
    description: "",
    tags: [],
    coverimage: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const MAX_IMAGES = 5;





  const [suggestions, setSuggestions] = useState([
    { value: "shirt", label: "Shirt" },
    { value: "jeans", label: "Jeans" },
    { value: "mobile", label: "Mobile" },
    { value: "laptop", label: "Laotop" },
    { value: "watch", label: "Watch" },
    { value: "jacket", label: "Jeans" },
    { value: "joggers", label: "Joogers" },
    { value: "jeans", label: "Jeans" },
    { value: "jeans", label: "Jeans" },
    // Add more suggestions as needed
  ]);
  const handleChangetag = (selectedTags) => {
    setTags(selectedTags);
  };
  const handleCreateTag = (inputValue) => {
    // Create a new tag if it doesn't exist in suggestions
    if (!suggestions.some((suggestion) => suggestion.label.toLowerCase() === inputValue.toLowerCase())) {
      setSuggestions((prevSuggestions) => [
        ...prevSuggestions,
        { value: inputValue.toLowerCase(), label: inputValue },
      ]);
    }
    // Add the newly created tag to the selected tags
    setTags((prevTags) => [...prevTags, { value: inputValue.toLowerCase(), label: inputValue }]);
  };

  return (
    <div>
      <h2 className=" text-2xl shadow-sm font-bold text-center border-b mb-2 pb-4">
        Add Product
      </h2>
      <div className="flex  w-full">
        <div className="w-1/2">


          {/* topsection */}

          <div className="flex w-full justify-between p-2">
            <div className="w-full  bg-white  flex flex-col p-6 gap-y-2 border shadow-lg rounded-md ">
              <div>
                <h1 className="font-bold text-lg m-3">Product Info</h1>
                <hr className="border-t-2 border-gray-300" />
              </div>

              <label
                className="block text-gray-700 text-md font-bold   mb-2"
                htmlFor="productName"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productType"
                name="productType"
                // value={product.productType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md placeholder:text-ls"
                placeholder="Enter product Name"
              />

              {/* tags */}
              <div>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="tags">
                  Tags
                </label>
                <Select
                  isMulti
                  options={suggestions}
                  value={tags}
                  onChange={handleChangetag}
                  onCreateOption={handleCreateTag}
                />
              </div>

              {/* //multiple image */}
              <div className="">
                <div>
                  <h1 className="font-bold text-gray-700 text-lg text-start">
                    Product Image
                  </h1>
                </div>

                {productImages.length == 0 && (
                  <div className="flex">
                    <div className="text-start flex py-3 h-full w-full">
                      <label
                        htmlFor="multipleImages"
                        className={`cursor-pointer w-full block bg-gray-100 border-dashed border-2 border-gray-300 p-4 rounded-md text-center ${productImages.length === MAX_IMAGES ? "" : ""
                          }`}
                      >
                        <h2 className="mb-2 text-ls font-semibold">
                          Select Multiple images here
                        </h2>
                        <span className="text-sm text-gray-600">
                          or click to select
                        </span>
                        <input
                          type="file"
                          id="multipleImages"
                          name="multipleImages"
                          accept="image/*"
                          multiple
                          onChange={handleMultiImageChange}
                          disabled={productImages.length === MAX_IMAGES}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>


              <div className="flex gap-x-2">
                <div className="text-start w-1/2">
                  <label
                    className="block text-gray-700 text-md mb-2"
                    htmlFor="warrantyStatus"
                  >
                    price
                  </label>
                  <input
                    type="text"
                    id="warrantyStatus"
                    name="warrantyStatus"
                    // value={product.warrantyStatus}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md placeholder:text-xs"

                  />
                </div>


                <div className="text-start w-1/2">
                  <label
                    className="block text-gray-700 text-md mb-2"
                    htmlFor="material"
                  >
                    Discount
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
                <div className="text-start w-1/2">
                  <label
                    className="block text-gray-700 text-md mb-2"
                    htmlFor="material"
                  >
                    stocks
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

              {/* //Description */}
              <div className="">
                <div>
                  <h1 className="font-bold text-gray-700 text-lg mt-3 text-start">
                    Product Description
                  </h1>
                </div>

                <hr />

                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="8"
                  className="bg-gray-50 border-2 border-gray-400 rounded-md p-2 w-full"
                  placeholder="Write product description"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-1/2">
          <div className="">
            <ProductType />
          </div>

          <div className="">

          

            <div className="m-6 flex justify-center">
              <button
                type="submit"
                className="w-1/3 bg-green-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProd;
