// src/components/Footer.jsx
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bgLight dark:bg-bgDark text-center py-6 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary mb-2">Campus Care</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Creating bold, futuristic experiences.
          </p>
        </div>
        <div className="flex justify-center space-x-4 text-primary text-xl mb-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Campus Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
