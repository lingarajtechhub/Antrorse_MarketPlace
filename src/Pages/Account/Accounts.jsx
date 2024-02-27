import { useState } from "react";
import Orders from "../Order/Order";
import AccountSettings from "./AccountSettings";
import Address from "./Address";
import Help from "./Help";
import Notifications from "./Notifications";

const Accounts = () => {
  const [activeComponent, setActiveComponent] = useState("accountSetting");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-4xl font-semibold text-left">
          Settings
        </h1>
        <div className=" flex justify-start pt-3 ">
          <div className=" w-1/4">
            <ul>
              {/* <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "profile"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("profile")}
              >
                Profile
              </li> */}
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "accountSetting"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("accountSetting")}
              >
                Account Setting
              </li>
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "orders"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("orders")}
              >
                Orders
              </li>
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "paymentMethod"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("paymentMethod")}
              >
                Payment Method
              </li>
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "address"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("address")}
              >
                Address
              </li>
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "notifications"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("notifications")}
              >
                Notifications
              </li>
              <li
                className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                  activeComponent === "help"
                    ? "border-l-blue-700 text-blue-700"
                    : "hover:border-l-blue-700 hover:text-blue-700"
                }`}
                onClick={() => handleComponentChange("help")}
              >
                Help & Support
              </li>
            </ul>
          </div>
          <div className="w-3/4">
            {activeComponent === "accountSetting" && <AccountSettings />}
            {activeComponent === "orders" && <Orders />}
            {activeComponent === "help" && <Help />}
            {activeComponent === "address" && <Address />}
            {activeComponent === "notifications" && <Notifications />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
