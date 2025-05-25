import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Complain from "./pages/WhyCampusCare";
import ContactForm from "./components/ContactForm"; // ✅ Import ContactForm
import ProductList from "./components/ProductCard"; // ✅ Import ProductList (ProductCard.jsx)

import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
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
          <Route path="/contact" element={<ContactForm />} /> {/* Existing */}
          <Route path="/grievance" element={<ProductList />} /> {/* ✅ New route for ProductList */}
        </Routes>
        <Footer />
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
