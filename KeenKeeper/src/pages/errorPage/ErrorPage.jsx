import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-8xl md:text-9xl lg:text-9xl font-extrabold text-[#224236] tracking-widest">
          404
        </h1>

        <div className="bg-red-600   px-2 text-sm rounded rotate-12 absolute transform -translate-y-16">
          <span className="text-white font-medium">Page not found</span>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Lost in space?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block px-8 py-3 text-sm md:text-lg lg:text-xl font-semibold text-white transition-all bg-[#224236] rounded-lg hover:bg-black shadow-lg hover:shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-[#224236]  focus:ring-offset-2"
          >
            Go Home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-25 text-[#568a77]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V49.75C51.56,69.77,115.89,77.61,173.19,70.8Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
