import { useState } from "react";
// import "./SellerAcc.css";

const SellerAccount = () => {
  const [emailEditable, setEmailEditable] = useState(false);
  const [mobileEditable, setMobileEditable] = useState(false);
  const [dobEditable, setDobEditable] = useState(false);

  const [email, setEmail] = useState("john.doe@example.com");
  const [mobileNumber, setMobileNumber] = useState("123-456-7890");
  const [dob, setDob] = useState("MM/DD/YYYY");

  const [emailSavedNotification, setEmailSavedNotification] = useState(false);
  const [mobileSavedNotification, setMobileSavedNotification] = useState(false);
  const [dobSavedNotification, setDobSavedNotification] = useState(false);

  const toggleEmailEditable = () => {
    setEmailEditable(!emailEditable);
  };

  const toggleMobileEditable = () => {
    setMobileEditable(!mobileEditable);
  };

  const toggleDobEditable = () => {
    setDobEditable(!dobEditable);
  };

  const saveEmail = () => {
    setEmailSavedNotification(true);
    setTimeout(() => {
      setEmailSavedNotification(false);
    }, 3000);
  };

  const saveMobile = () => {
    setMobileSavedNotification(true);
    setTimeout(() => {
      setMobileSavedNotification(false);
    }, 3000);
  };

  const saveDob = () => {
    setDobSavedNotification(true);
    setTimeout(() => {
      setDobSavedNotification(false);
    }, 3000);
  };

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Seller Profile</h1>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="relative my-4 w-56 sm:hidden">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
          >
            Accounts{" "}
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
              Accounts
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>

        <div className="col-span-2 hidden sm:block">
          <ul>
            <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
              Profile
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Products & Reports
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Orders
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Help & Support
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>

        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div className="pt-4">
            <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
            <p className="font- text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Profile Name */}
          <p className="py-5 text-xl font-semibold text-left">Name</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-700">Full Name</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="text"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    value="John Doe"
                    readOnly
                  />
                </div>
              </label>
            </div>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Addresses */}
          <p className="py-2 text-xl font-semibold text-left">Addresses</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-500 text-left">
                  Billing Address
                </span>
                {/* Add input fields for billing address */}
              </label>
              <label>
                <span className="text-sm text-gray-500 text-left">
                  Shop Address
                </span>
                {/* Add input fields for shop address */}
              </label>
              {/* Add functionality for adding more addresses */}
            </div>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Email ID */}
          <p className="py-2 text-xl font-semibold text-left">Email ID</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-500">Email</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  {emailEditable ? (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={email}
                      readOnly
                    />
                  )}
                  {emailEditable ? (
                    <button
                      onClick={() => {
                        toggleEmailEditable();
                        saveEmail();
                      }}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={toggleEmailEditable}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </label>
            </div>
          </div>
          {emailSavedNotification && (
            <div className="mt-2 text-green-500">Email Saved Successfully!</div>
          )}
          <hr className="mt-4 mb-8" />

          {/* Mobile number */}
          <p className="py-2 text-xl font-semibold text-left">Mobile Number</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-500">Mobile</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  {mobileEditable ? (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={mobileNumber}
                      readOnly
                    />
                  )}
                  {mobileEditable ? (
                    <button
                      onClick={() => {
                        toggleMobileEditable();
                        saveMobile();
                      }}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={toggleMobileEditable}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </label>
            </div>
          </div>
          {mobileSavedNotification && (
            <div className="mt-2 text-green-500">
              Mobile Saved Successfully!
            </div>
          )}
          <hr className="mt-4 mb-8" />

          {/* Date of Birth */}
          <p className="py-2 text-xl font-semibold text-left">Date of Birth</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-500">DOB</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  {dobEditable ? (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      value={dob}
                      readOnly
                    />
                  )}
                  {dobEditable ? (
                    <button
                      onClick={() => {
                        toggleDobEditable();
                        saveDob();
                      }}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={toggleDobEditable}
                      className="absolute inset-y-0 right-0 px-4 font-semibold text-white bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </label>
            </div>
          </div>
          {dobSavedNotification && (
            <div className="mt-2 text-green-500">DOB Saved Successfully!</div>
          )}
          <hr className="mt-4 mb-8" />

          {/* Security Questions */}
          <p className="py-2 text-xl font-semibold text-left">
            Security Questions
          </p>
          {/* Add input fields for security questions and answers */}
          <hr className="mt-4 mb-8" />

          {/* GST */}
          <p className="py-2 text-xl font-semibold text-left">GST</p>
          <div className="flex items-center">
            <div className="flex flex-col space-y-2">
              <label>
                <span className="text-sm text-gray-500">GST Number</span>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="text"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    value="GST123456789"
                    readOnly
                  />
                </div>
              </label>
            </div>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Account Details */}
          <p className="py-2 text-xl font-semibold text-left">
            Account Details
          </p>
          {/* Add input fields for account details */}

          <div className="mt-4 flex justify-center">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
              Save Changes
            </button>
          </div>
          <hr className="mt-4 mb-8" />

          <div className="mb-10 flex justify-center">
            <p className="py-2 text-xl font-semibold">Delete Account</p>
            {/* Add functionality for deleting account */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAccount;