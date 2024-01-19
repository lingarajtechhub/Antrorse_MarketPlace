import React from "react";

const item = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
const Banner = () => {
  return (
    <section className="flex flex-wrap m-4 ">
      {item &&
        item.map((item) => (
          <div
            key={item.id}
            className="banner-box relative h-80 w-full sm:w-1/2 md:w-1/3 p-4 flex justify-end"
          >
            <img
              className="w-full h-full object-cover rounded-sm"
              src="https://img.freepik.com/free-photo/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot_197531-7073.jpg?t=st=1705643757~exp=1705644357~hmac=caac245df910d9b308101f73865d55e183afb0ee710fc11db67761cd14c3c797"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-end flex-col text-white p-8">
              <h4 className="text-xl font-semibold">Special Deals</h4>
              <h2 className="text-2xl font-extrabold">Don't Miss Out!</h2>
              <span className="font-medium pb-10">
                Limited-time offers on top fashion items
              </span>

              <button className="white-button w-1/3 p-2 border rounded-sm  transition duration-200 ease-in-out hover:bg-teal-600 hover:border-teal-600 w-full sm:w-1/2 md:w-1/3">
                Learn more
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Banner;
