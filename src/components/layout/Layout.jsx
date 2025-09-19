// src/components/layout/Layout.jsx
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/browse" },
    { name: "Upload", path: "/upload" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#222]">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50 h-16">
        <Link to="/" className="font-bold text-xl text-emerald-600">
          Zuula Fashion
        </Link>

        {/* Desktop Navigation */}
        <div className="space-x-4 hidden sm:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link relative py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-600 hover:text-emerald-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-emerald-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out sm:hidden ${
          mobileMenuOpen
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link py-2 px-4 rounded transition-colors duration-300 ${
                  isActive
                    ? "text-emerald-600 font-semibold bg-emerald-50"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Spacer for navbar */}
      <div className="h-16"></div>

      {/* Main Content - REPLACED children with Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 mt-auto py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Zuula Fashion</h3>
            <p>Peer-to-peer fashion rental platform. Rent, borrow, repeat.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse" className="hover:text-emerald-600">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-emerald-600">
                  Upload
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-emerald-600">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: support@zuula.com</p>
            <p>Phone: +256 700 000 000</p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="hover:text-emerald-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-emerald-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-emerald-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-emerald-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Zuula Fashion. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;