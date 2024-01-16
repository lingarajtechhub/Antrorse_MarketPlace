import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-50">
      <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div class="max-w-sm">
          <div class="mb-6 flex h-12 items-center space-x-2">
            <span class="text-2xl font-bold">
              Ant<span class="text-blue-600">rorse</span>.
            </span>
          </div>
          <div class="text-gray-500">
            Registered in the year 2012 as a private limited company Antrorse
            Technosoft Private Limited is a CMMI Maturity Level 5 company and
            also certified as ISO/IEC 20000-1:2011 and ISO/IEC 27001:2013{" "}
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div class="text-gray-500">
            1st and 2nd Floor
            <br />
            Esmeralda Business Square
            <br />
            Opp Gera River Of Joy
            <br />
            Kadamba plateau
            <br />
            Old Goa bypass road <br />
            Tiswadi Goa 403402
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" class="text-gray-500">
            <ul class="space-y-3">
              <li>
                <a class="hover:text-blue-600 hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a class="hover:text-blue-600 hover:underline" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a class="hover:text-blue-600 hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a class="hover:text-blue-600 hover:underline" href="#">
                  Support Hub
                </a>
              </li>
              <li>
                <a class="hover:text-blue-600 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div class="flex flex-col">
            <div class="mb-4">
              <input
                type="email"
                class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div class="">© 2022 Antrorse | All Rights Reserved</div>
          <div class="">
            <a class="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a class="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
