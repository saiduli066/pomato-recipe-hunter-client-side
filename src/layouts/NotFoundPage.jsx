import React from "react";
import { Link } from "react-router-dom";
import NOtFound from "../assets/images/404.png";
const NotFoundPage = () => {
  return (
    <div className="bg-gray-100 text-center min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="flex flex-col items-center justify-center mb-8">
          <img src={NOtFound} alt="404 Error" className="w-[60%] mr-4" />
          <h1 className="text-3xl font-bold">Oops! Page not found</h1>
        </div>
        <p className="text-gray-600 text-lg mb-4">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
