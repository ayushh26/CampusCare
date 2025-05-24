import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide icons
import ThemeToggle from "./ThemeToggle";
import Logo from "../assests/logo.jpg";

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-[#111]/70 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo and Brand */}
        <a
          href="/"
          className="flex items-center group transition-all duration-300"
        >
          <img
            src={Logo}
            alt="Campus Care"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-3 "
          />
          <span className="ml-1 text-2xl font-extrabold text-primary dark:text-white transition-all duration-300 group-hover:scale-90  ">
            CAMPUS CARE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
          <a href="/" className="hover:text-primary transition">
            Home
          </a>
          {/* <a href="/campuslife" className="hover:text-primary transition">
            Campus Life
          </a> */}
          <a href="/whycampuscare" className="hover:text-primary transition">
            Why Choose Campus Care ?
          </a>
          {/* <a href="/contact" className="hover:text-primary transition">
            Contact for grievance
          </a> */}
        </nav>

        {/* Theme toggle & mobile menu toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-[#111] shadow-inner">
          <a
            href="/"
            className="block py-2 px-2 rounded-md hover:bg-primary/10"
          >
            Home
          </a>
          {/* <a
            href="/campuslife"
            className="block py-2 px-2 rounded-md hover:bg-primary/10"
          >
            Campus Life
          </a> */}
          <a
            href="/whycampuscare"
            className="block py-2 px-2 rounded-md hover:bg-primary/10"
          >
            Why Choose Campus Care ?
          </a>
          {/* <a
            href="/contact"
            className="block py-2 px-2 rounded-md hover:bg-primary/10"
          >
            Contact for grievance
          </a> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
