import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/pomato-modified.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Chefs", path: "/chefs" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white shadow-sm border-gray-100 py-3"
          : "bg-white border-transparent py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Aussie Cuisine"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span
            className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-slate-800" : "text-slate-800 lg:text-slate-800"}`}
          >
            Aussie<span className="text-amber-600">Cuisine</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                  isActive
                    ? "text-amber-600 font-bold border-b-2 border-amber-600 pb-1"
                    : scrolled
                      ? "text-slate-600"
                      : "text-slate-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* User Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-100 ring-offset-2"
                  />
                ) : (
                  <FaUserCircle className="w-8 h-8 text-slate-400" />
                )}
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline border-slate-300 hover:bg-slate-800 hover:border-slate-800 hover:text-white capitalize rounded-full px-5 font-normal"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-slate-900 border-slate-900 text-white hover:bg-amber-600 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/20 capitalize rounded-full px-6 font-normal transition-all duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {user && (
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-amber-100">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 hover:text-amber-600 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top transform ${mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium ${location.pathname === link.path ? "text-amber-600" : "text-slate-700"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-red-500 font-medium"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 font-medium hover:text-amber-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
