

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/pomato-modified.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

    const {user} = useContext(AuthContext);
                   /**NavBar**/ 
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-[600]">Home</Link>
            </li>
            <li>
              <Link className="font-[600]">Blog</Link>
            </li>
            <li>
              <Link className="font-[600]">Profile picture</Link>
            </li>
          </ul>
        </div>
        <img src={logo} alt="pomato image" className="w-12 h-12 me-0" />
        <Link
          className=" normal-case text-white text-xl md:text-3xl ms-7 md:ms-2 font-[700]"
          to="/"
        >
          Pomato
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-xl text-white font-[600]">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl text-white font-[600]">Blog</Link>
          </li>
          <li>
            <Link className="text-xl text-white font-[600]">User Profile </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link  className="btn btn-success md:text-xl text-white">Login</Link>
      </div>
    </div>
  );
};

export default Header;
