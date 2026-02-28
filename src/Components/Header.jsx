import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/Poeage_Hub_Logo2.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Poeage", path: "/about" },
    { name: "Poeage Hub", path: "/poeage-hub" },
    { name: "Contact", path: "/contact" },
  ];

  return (
<header className="bg-white border-b sticky top-0 z-50 h-16 md:h-20">
  <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Poeage Hub"
        className="h-12 md:h-16 w-auto object-contain"
      />
    </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-cyan-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-cyan-600 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}