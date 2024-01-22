import { useState } from "react";
import TagsInput from "react-tagsinput";
import { FaUpload } from "react-icons/fa";
import "react-tagsinput/react-tagsinput.css";
import ProductType from "../../components/ProductType/ProductType";

const AddProd = () => {
  const [productImages, setProductImages] = useState([]);

  const handleMultiImageChange = (e) => {
    const files = e.target.files;
    // Set the maximum allowed number of images
    const maxAllowedImages = 5;
    // Check if the total number of images after selecting is within the limit
    if (productImages.length + files.length > maxAllowedImages) {
      alert(
        `Please select up to ${
          maxAllowedImages - productImages.length
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

  const handleTagsChange = (tags) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      tags: tags,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        coverimage: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="w-full bg-white ">
      <ProductType />

      {/* topsection */}

      <div className="flex w-full justify-between p-10">
        <div className="w-full max-w-md mx-auto mt-8 flex flex-col p-6 gap-y-4 border shadow-lg rounded-md bg-white">
          <div>
            <h1 className="font-semibold text-lg text-start">Product Info</h1>
            <hr className="border-t-2 border-gray-300" />
          </div>

          {/* tags */}
          <div className="mb-4 w-full text-start">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tags"
            >
              Tags{" "}
            </label>
            <TagsInput
              className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full"
              id="tags"
              name="tags"
              value={product.tags}
              onChange={handleTagsChange}
            />
          </div>

          {/* Single Image */}

          <div className="flex flex-col gap-y-4 " id="cover">
            <div>
              <h1 className="font-semibold text-lg text-start">Cover image</h1>
            </div>
            {product.coverimage && (
              <div className="mb-4 w-full h-44 border-dashed border-2 border-gray-300 relative overflow-hidden rounded-md">
                <img
                  src={product.coverimage}
                  alt="Cover Image"
                  className="w-screen h-full object-cover rounded-md opacity-100"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-gray-50 text-black opacity-75 hover:opacity-100"
                  type="button"
                  onClick={() => document.getElementById("image").click()}
                >
                  Change your cover image
                </button>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            )}

            <div className="text-start flex py-3 w-full">
              {product.coverimage >= 0 && (
                <label
                  htmlFor="image"
                  className="cursor-pointer w-full block bg-gray-100 border-dashed border-2 border-gray-300 p-4 rounded-md text-center"
                >
                  <h2 className="mb-2 text-lg font-semibold">
                    Select your cover image here
                  </h2>
                  <span className="text-sm text-gray-600">
                    or click to select
                  </span>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* //multiple image */}
          <div className="">
            <div>
              <h1 className="font-semibold text-lg text-start">
                Product Image
              </h1>
            </div>

            {productImages.length == 0 && (
              <div className="flex">
                <div className="text-start flex py-3 h-full w-full">
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
            )}

            {productImages.length > 0 && (
              <div className="cursor-pointer flex block bg-gray-100 border-dashed border-2 border-gray-300 p-4 rounded-md text-center">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className="h-30 w-20 object-contain rounded-md mb-2 gap-10"
                  >
                    <img
                      src={image.url}
                      alt={`Product Image ${index + 1}`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* //Description */}
          <div className="">
            <div>
              <h1 className="font-semibold text-lg text-start">
                Product Description
              </h1>
            </div>

            <hr />

            <textarea
              name="description"
              id="description"
              cols="30"
              rows="8"
              className="bg-gray-100 border-2 border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter product description"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProd;
