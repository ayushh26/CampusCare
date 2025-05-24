// src/pages/Home.jsx
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";

const Home = () => {
  return (
    <motion.main
      className="bg-bgLight dark:bg-bgDark text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-12">
        <HeroSection />
      </section>
      <section className="py-12">
        <motion.h2
          className="text-4xl font-bold text-center  text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHY CHOOSE <span className="text-primary">CAMPUS CARE</span>
        </motion.h2>
        <Features />
      </section>

      <section className="py-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHERE TO <span className="text-primary">COMPLAIN ?</span>
        </motion.h2>

        <ProductCard />
      </section>

      <section className="py-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          REGISTER YOUR <span className="text-primary">COMPLAIN</span>
        </motion.h2>
        <ContactForm />
      </section>
    </motion.main>
  );
};

export default Home;
