import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you have found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                <Link to="/home">Take me there!</Link>
              </button>
              <div className="mt-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                  >
                    <span>Documentation</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Dive in to learn all about our product.
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                  >
                    <span>Our blog</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Read the latest posts on our blog.
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                  >
                    <span>Chat to support</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our friendly team is here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};

export default NotFound;
