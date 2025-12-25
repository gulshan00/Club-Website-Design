import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/events", label: "EVENTS" },
    { path: "/podcast", label: "PODCAST" },
    { path: "/about", label: "ABOUT" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md  border-white/10">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            {/* LOGO LEFT */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
             <h1 className="text-white font-extrabold text-2xl">
            DHRUVA
            <span className="block text-[10px] tracking-widest">
              ASTRONOMY CLUB
            </span>
          </h1>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 🍔 HAMBURGER ON RIGHT (mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white text-3xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* DARK OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* LEFT SLIDE-IN MENU */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-black to-gray-900 border-r border-white/10 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            DHRUVA
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Exploring the cosmos together
          </p>
        </div>

        <ul className="px-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition ${
                  isActive(link.path)
                    ? "bg-cyan-500/10 text-gray-300 "
                    : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;

