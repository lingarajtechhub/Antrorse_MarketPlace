import { useState } from "react";
import TagsInput from "react-tagsinput";
import { FaUpload } from "react-icons/fa";
import "react-tagsinput/react-tagsinput.css";
import ProductType from "../../components/ProductType/ProductType";
import AddProduct from "./AddProduct";

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

  const handleRemoveCoverImage = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      coverimage: "",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product:", product);
  };

  const handleRemoveImage = (index) => {
    setProductImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
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

              {/* tags */}
              <div className="mb-4 w-full text-start text-gray-300">
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
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
                  <h1 className="font-bold text-gray-700 text-lg text-start">
                    Cover image
                  </h1>
                </div>
                {product.coverimage && (
                  <div className="mb-4 w-full h-44 border-dashed border-2 border-gray-300 object-contain relative overflow-hidden rounded-md">
                    <img
                      src={product.coverimage}
                      alt="Cover Image"
                      className="w-screen h-full object-cover rounded-sm opacity-100"
                    />
                    <button
                      className="absolute top-0 right-0   bg-red-500 text-white px-2 text-lg rounded-full cursor-pointer hover:bg-red-700"
                      type="button"
                      onClick={() => handleRemoveCoverImage()}
                    >
                      X
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
                  {!product.coverimage && (
                    <label
                      htmlFor="image"
                      className="cursor-pointer w-full block bg-gray-100 border-dashed border-2 border-gray-300 p-4 rounded-md text-center"
                    >
                      <h2 className="mb-2 text-gray-700 text-lg font-semibold">
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
                        // style={{ display: 'none' }}
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
                  <h1 className="font-bold text-gray-700 text-lg text-start">
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
            <div>
              <div className=" mx-auto mt-6 p-6   bg-white rounded-md shadow-sm  border ">
                <h2 className="text-lg text-start font-bold mb-6">
                  Product Information
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <div>
                      <label
                        className="text-start block text-gray-700 text-md  mb-2"
                        htmlFor="productName"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-sm"
                        required
                      />
                    </div>
                    <label
                      className="text-start block text-gray-700 text-md    mb-2"
                      htmlFor="productName"
                    >
                      Product Type
                    </label>
                    <input
                      type="text"
                      id="productType"
                      name="productType"
                      value={product.productType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded-md placeholder:text-xs"
                      required
                    />
                    <div className="flex gap-x-2">
                      <div className="text-start flex flex-col">
                        <label
                          className="block text-gray-700 text-md   mb-2"
                          htmlFor="productName"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={product.price}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-sm"
                          required
                        />
                      </div>
                      <div className="text-start flex flex-col">
                        <label
                          className="block text-gray-700 text-md  mb-2"
                          htmlFor="productName"
                        >
                          Discount
                        </label>
                        <input
                          type="text"
                          id="discount"
                          name="discount"
                          value={product.discount}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                          required
                        />
                      </div>
                      <div className="text-start flex flex-col">
                        <label
                          className="block text-gray-700 text-md  mb-2"
                          htmlFor="productName"
                        >
                          Discount Price
                        </label>
                        <input
                          type="text"
                          id="discountPrice"
                          name="discountPrice"
                          value={product.discountPrice}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="block text-gray-700 text-md mb-2"
                      htmlFor="productName"
                    >
                      Product Description
                    </label>

                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={product.productName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                    <div className="flex gap-x-2">
                      <div className="text-start flex flex-col">
                        <label
                          className="block text-gray-700 text-md   mb-2"
                          htmlFor="productName"
                        >
                          Stock
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={product.price}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-2 rounded-md"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

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
