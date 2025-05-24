import React, { useState } from "react";
import { motion } from "framer-motion";

import canteen from "../assests/Products/Canteen.jpg";
import depart from "../assests/Products/depart.jpg";
import faculty from "../assests/Products/faculty.jpg";
import env from "../assests/Products/env.jpg";
import classroom from "../assests/Products/class.jpg";
import elct from "../assests/Products/elct.jpg";

const productsData = [
  {
    id: 1,
    name: "Canteen",
    title: "Complain regarding canteen issues and hygienes.",
    image: canteen,
  },
  {
    id: 2,
    name: "Departments",
    title: "Complain regarding departments issues and hierarchy.",
    image: depart,
  },
  {
    id: 3,
    name: "Environement & Garden areas",
    title: "Complain regarding environment issues and garden areas.",
    image: env,
  },
  {
    id: 4,
    name: "Faculties",
    title: "Complain regarding faculties issues.",
    image: faculty,
  },
  {
    id: 5,
    name: "Classrooms",
    title: "Complain regarding classrooms issues.",
    image: classroom,
  },
  {
    id: 6,
    name: "Electricity and Water Supply",
    title: "Complain regarding electricity and water supply issues.",
    image: elct,
  },
];

const ProductList = () => {


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-bgLight dark:bg-bgDark text-gray-800 dark:text-gray-100">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-[#1e1e1e] backdrop-blur-lg p-5 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {product.title}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-4 py-2 rounded-md font-medium shadow-md hover:shadow-lg"
              >
                Action
              </motion.button>
            </div>
          </motion.div>
        ))}
      
      </div>
    </section>
  );
};

export default ProductList;
