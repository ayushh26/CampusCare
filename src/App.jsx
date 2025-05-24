import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Complain from "./pages/WhyCampusCare";

function App() {
  // Check localStorage for saved theme, otherwise default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.className = theme;

    // Persist theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen font-sans">
      <Router>
        <ScrollToTop />
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whycampuscare" element={<Complain />} />
        </Routes>
        <Footer />
      </Router>

      {/* Toast notifications container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
