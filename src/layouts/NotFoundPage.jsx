import React from "react";
import { Link } from "react-router-dom";
import NOtFound from "../assets/images/404.png";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center p-12 lg:p-16 transform hover:scale-[1.005] transition-transform duration-500">
        <div className="flex justify-center mb-10">
          <img
            src={NOtFound}
            alt="404 Error"
            className="w-full max-w-sm object-contain drop-shadow-sm"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
          Oops! Table Not Set
        </h1>

        <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          The recipe you're looking for seems to have vanished from our
          cookbook. It might have been moved or doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-amber-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-amber-600/30 transition-all duration-300 hover:-translate-y-1"
        >
          <FaHome size={18} />
          Back to Kitchen
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
