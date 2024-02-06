import { useState } from "react";
import CreatableSelect from "react-select/creatable";

import "react-tagsinput/react-tagsinput.css";
import ProductType from "../../components/ProductType/ProductType";

const AddProd = () => {
  const [productImages, setProductImages] = useState([]);
  const [product, setProduct] = useState({
    description: "",
    tags: [],
    photos: [],
    productName: "",
    productType: "",
    price: "",
    discountPercent: "",
    stock: "",
    // variation : {

    // }
  });

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

  const handleMultiImageChange = (e) => {
    const files = e.target.files;
    // Set the maximum allowed number of images
    const maxAllowedImages = 5;
    // Check if the total number of images after selecting is within the limit
    if (productImages.length + files.length > maxAllowedImages) {
      alert(
        `Please select maximum ${
          maxAllowedImages - productImages.length
        }  images.`
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "productName" ||
      name === "productType" ||
      name === "description"
    ) {
      // String validation
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        alert(
          `Please enter a valid ${name}. Only letters and spaces are allowed.`
        );
        return;
      }
    } else if (
      name === "price" ||
      name === "discountPrice" ||
      name === "stock"
    ) {
      // Number validation
      if (!/^\d+$/.test(value)) {
        alert(`Please enter a valid ${name}. Only numbers are allowed.`);
        return;
      }
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const MAX_IMAGES = 5;

  const handleRemoveImage = (index) => {
    setProductImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleChangetag = (selectedOptions) => {
    const selectedOptionsValue = selectedOptions.map((tag) => tag.value);

    const newTags = selectedOptionsValue.filter((tagValue) => {
      return !product.tags.find(
        (tag) => tag.value.toLowerCase() === tagValue.toLowerCase()
      );
    });

    newTags.forEach((tagValue) => {
      setProduct((prevProduct) => ({
        ...prevProduct,
        tags: [...prevProduct.tags, { value: tagValue, label: tagValue }],
      }));
    });
  };

  const handleCreateTag = (inputValue) => {
    const lowerCaseInputValue = inputValue.toLowerCase();

    if (
      !suggestions.some(
        (suggestion) => suggestion.label.toLowerCase() === lowerCaseInputValue
      )
    ) {
      const newTag = { value: lowerCaseInputValue, label: inputValue };

      setSuggestions((prevSuggestions) => [...prevSuggestions, newTag]);

      setProduct((prevProduct) => ({
        ...prevProduct,
        tags: [...prevProduct.tags, newTag],
      }));
    }
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        color: "gray",
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#A3EBB1", // Change the background color of selected tags here
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: "black", // Change the text color of selected tags here
    }),
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
              <label
                className="block text-gray-700 text-md font-bold   mb-2"
                htmlFor="productName"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={product.productName}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, productName: e.target.value };
                  });
                }}
                className="w-full border border-gray-300 p-2 rounded-md placeholder:text-ls"
                placeholder="Enter product Name"
              />

              {/* //multiple image */}
              <div className="">
                <div>
                  <h1 className="font-bold text-gray-700 text-lg text-start">
                    Product Image
                  </h1>
                </div>

                {productImages.length > 0 && (
                  <div className="flex flex-wrap  border-dashed border-2 border-gray-300 rounded-md ">
                    {productImages.map((image, index) => (
                      <div key={index} className=" w-1/6 m-2 relative">
                        <img
                          src={image.url}
                          alt={`Product Image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md"
                        />
                        <button
                          className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full cursor-pointer hover:bg-red-700"
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className={`flex ${
                    productImages.length === MAX_IMAGES ? "hidden" : ""
                  }`}
                >
                  <div
                    className="text-start flex py-3 h-full w-full"
                    disabled={productImages.length === MAX_IMAGES}
                  >
                    <label
                      htmlFor="multipleImages"
                      className={`cursor-pointer w-full block bg-gray-100 border-dashed border-2 border-gray-300 p-4 rounded-md text-center ${
                        productImages.length === MAX_IMAGES ? "" : ""
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
              </div>

              <div className="flex gap-x-2">
                <div className="text-start flex flex-col">
                  <label
                    className="block text-gray-700 text-md   mb-2"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={(e) => {
                      setProduct((prev) => {
                        return { ...prev, price: e.target.value };
                      });
                    }}
                    className="w-full border border-gray-300 p-2 rounded-sm"
                    required
                  />
                </div>
                <div className="text-start flex flex-col">
                  <label
                    className="block text-gray-700 text-md whitespace-nowrap  mb-2"
                    htmlFor="discountPercent"
                  >
                    Discount Percent
                  </label>
                  <input
                    type="number"
                    id="discountPercent"
                    name="discountPercent"
                    value={product.discountPercent}
                    onChange={(e) => {
                      setProduct((prev) => {
                        return { ...prev, discountPercent: e.target.value };
                      });
                    }}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>

                <div className="text-start flex flex-col">
                  <label
                    className="block text-gray-700 text-md   mb-2"
                    htmlFor="stock"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={product.stock}
                    onChange={(e) => {
                      setProduct((prev) => {
                        return { ...prev, stock: e.target.value };
                      });
                    }}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
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
                  onChange={(e) => {
                    setProduct((prev) => {
                      return { ...prev, description: e.target.value };
                    });
                  }}
                ></textarea>
              </div>

              {/* tags */}
              <div>
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <CreatableSelect
                  isMulti
                  options={suggestions}
                  value={product.tags || product.tags.value}
                  styles={colourStyles}
                  onChange={(selectedOptions) =>
                    handleChangetag(selectedOptions)
                  }
                  onCreateOption={handleCreateTag}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter" && e.target.value) {
                  //     handleCreateTag(e.target.value);
                  //   }
                  // }}
                />
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
