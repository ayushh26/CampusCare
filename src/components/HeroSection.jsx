// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import hero from "../assests/hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <motion.div
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Welcome to <span className="text-primary">Campus Care</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
           Unlike traditional paper-based or verbal systems, this app provides a single, unified platform where all stakeholders can log, view, and track grievances in real time. This reduces confusion and ensures that no complaint goes unnoticed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition">
              Go to Grievance
            </button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={hero}
            width="100%"
            height="auto"
            alt="Futuristic Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
