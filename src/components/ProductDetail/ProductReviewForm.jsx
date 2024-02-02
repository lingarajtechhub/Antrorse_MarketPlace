import React, { useState } from "react";

const ProductReviewForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleCancel = () => {
    setDesc("");
    setName("");
  };

  return (
    <div className="w-full bg-white rounded-lg shadow  sm:max-w-md  mt-6">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Write Review
        </h1>

        <form
          className="space-y-4 md:space-y-6"
          action="#"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="desc" className="text-sm font-medium text-gray-900">
              Review
            </label>
            <textarea
              type="textarea"
              name="desc"
              id="desc"
              className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5"
              placeholder="Write review here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="flex justify-center mb-3 gap-4">
        <div className="">
          <button
            type="submit"
            className="w-full text-slate-200 bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5  py-2.5 text-center"
          >
            Submit
          </button>
        </div>
        <div className="">
          <button
            type="submit"
            className="text-black bg-gray-200 focus:ring-3 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductReviewForm;
