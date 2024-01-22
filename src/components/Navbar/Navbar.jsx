import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-sm flex items-center justify-between  z-10">
      <section className="relative mx-auto flex flex-1 ">
        <nav className="flex justify-between w-full ">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading">
              <img
                className="h-9"
                src="https://antrorse.org/img/logo.png"
                alt="logo"
              />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link to="/" className="" >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <a className="hover:underline" href="#">
                  Mens
                </a>
                <ul
                  className="absolute hidden mt-2 space-y-2 bg-white border rounded-md group-hover:block"
                  style={{ width: "180px" }}
                >
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      T-shirt
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      causal Shirts
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Hoodies
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Formals shirts
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Uppers
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      jackets
                    </a>
                  </li>
                </ul>
                <span className="ml-1 text-gray-500">&#9662;</span>
              </li>
              <li className="relative group">
                <a className="" href="#">
                  Womens
                </a>
                <ul
                  className="absolute hidden mt-2 space-y-2  bg-white border rounded-md group-hover:block"
                  style={{ width: "180px" }}
                >
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      T-shirt
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      causal Shirts
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Hoodies
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Formals shirts
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      Uppers
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-gray-800" href="#">
                      jackets
                    </a>
                  </li>
                </ul>
                <span className="ml-1 text-gray-500">&#9662;</span>
              </li>
              <li>
                <a className="" href="#">
                  Trending Products
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Shops
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 pt-0.5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="ml-2 outline-none bg-transparent border  rounded-md p-2 mr-2"
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
              />
            </div>
            <div className="hidden xl:flex items-center space-x-5">
              <a className="" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <Link to="/Orders" className="flex items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </Link>
              <a className="flex items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
              <button
                className="bg-blue-500 text-sm py-3 text-white px-5  rounded-md "
                style={{ whiteSpace: "nowrap" }}
              >
                Become a seller
              </button>
            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
