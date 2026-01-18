import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800/50 pb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
              Aussie<span className="text-amber-500">Cuisine</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Discover the authentic flavors of Australia. From coastal seafood
              to outback bush tucker, we bring the best down-under recipes to
              your kitchen.
            </p>
            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                  >
                    <Icon
                      size={16}
                      className="text-slate-400 group-hover:text-white transition-colors"
                    />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Popular Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Culinary Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/chefs"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Featured Chefs
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Latest Trends
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6 tracking-wide">
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Seafood
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  BBQ & Grills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Desserts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Vegan Options
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6 tracking-wide">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Get the latest recipes sent right to your inbox weekly.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 border border-slate-800 text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button className="bg-amber-600 text-white font-medium text-sm py-3 rounded-lg hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AussieCuisine. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>for food lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
