import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/features/User/UserSlice";

import Antrorse from "../../assets/logo/Antrorse.png";

const SubMenu = ({ items }) => (
  <ul className="absolute left-0 hidden mt-1 space-y-1 bg-white border rounded-md group-hover:block">
    {items.map((item, index) => (
      <li key={`${item.path}-${index}`}>
        <NavLink
          to={item.path}
          className="block px-4 py-2 text-gray-800 whitespace-nowrap hover:bg-slate-200 "
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
);
const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.user.authorized);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  console.log(isUserLoggedIn);
  const mainMenu = [
    {
      path: "/men",
      label: "Men",
      subMenu: [
        { path: "/men", label: "T-shirt" },
        { path: "/men", label: "Causal Shirts" },
        { path: "/men", label: "Hoodies" },
        { path: "/men", label: "Formals shirts" },
        { path: "/men", label: "Uppers" },
        { path: "/men", label: "jackets" },
      ],
    },
    {
      path: "/women",
      label: "Women",
      subMenu: [
        { path: "/women", label: "T-shirt" },
        { path: "/women", label: "Causal Shirts" },
        { path: "/women", label: "Hoodies" },
        { path: "/women", label: "Formals shirts" },
        { path: "/women", label: "Uppers" },
        { path: "/women", label: "jackets" },
      ],
    },
    { path: "/trending-products", label: "Trending Products" },
    { path: "/shops", label: "Shops" },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Dispatch the logout action to clear user data
    dispatch(auth(false));
    navigate("/");
    // Optionally, you can clear the user data from local storage
    localStorage.removeItem("user");
  };
  const UserProfileDropdown = () => (
    <div
      ref={dropdown}
      className={`absolute  mt-40 ml-3 w-32 space-y-2 bg-white border rounded-md ${
        isProfileDropdownOpen === true ? "block" : "hidden"
      }`}
    >
      {/* Add menu items for the user profile dropdown */}
      <Link to="/account" className="block px-4 py-1 text-gray-800">
        My Profile
      </Link>
      <Link to="/account" className="block px-4 py-1 text-gray-800">
        Settings
      </Link>
      <button
        onClick={handleLogout}
        className=" border-t px-4 py-1 justify-between flex gap-y-1 text-gray-800"
      >
        <CiLogout className="mt-1" /> Logout
      </button>
    </div>
  );
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !isProfileDropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setIsProfileDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <header className="header sticky top-0 bg-white shadow-sm flex items-center justify-between  z-[90000]">
      <section className="relative mx-auto flex flex-1 ">
        <nav className="flex justify-between w-full ">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading">
              <img className="h-9" src={Antrorse} alt="logo" />
            </Link>
            <ul className="hidden md:flex px-3 mx-auto font-semibold font-heading space-x-12">
              {mainMenu.map((menuItem) => (
                <li
                  key={menuItem.path}
                  className="relative group py-4 text-nowrap"
                >
                  {menuItem.subMenu ? (
                    <>
                      <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
                      <SubMenu items={menuItem.subMenu} />
                      <span className="ml-1 text-black">&#9662;</span>
                    </>
                  ) : (
                    <Link to={menuItem.path}>{menuItem.label}</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center border-2 mr-2 border-slate-200 rounded-md px-2">
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
                className="ml-2 outline-none bg-transparent border-none  rounded-md p-2 mr-2"
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
              />
            </div>
            <div className="hidden xl:flex items-center space-x-5 ">
              <Link to="/wishlist" className="flex items-center">
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
              </Link>

              <div>
                <Link to="/viewcart" className="flex items-center">
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
                  {cartItems.length <= 0 ? (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                  ) : (
                    <span className=" flex  items-center justify-center absolute text-xs -mt-6  ml-4 bg-pink-400 rounded-full w-5 h-5 p-2  text-white">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
              {/* userProfile or login */}
              <div className="flex items-center justify-center gap-2">
                {isUserLoggedIn ? (
                  <span
                    className="flex items-center gap-0"
                    ref={trigger}
                    onClick={() =>
                      setIsProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                  >
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
                    <RiArrowDropDownLine className="w-6   h-6 cursor-pointer" />
                    {isProfileDropdownOpen && <UserProfileDropdown />}
                  </span>
                ) : (
                  <Link
                    className=" text-black px-4 py-1  flex flex-1 h-full border  border-black rounded-sm"
                    to="/login"
                  >
                    login
                  </Link>
                )}
                <Link
                  to="/sellersignup"
                  className=" text-black px-4 py-1  rounded-sm  border border-black"
                >
                  Become a seller
                </Link>
              </div>
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
