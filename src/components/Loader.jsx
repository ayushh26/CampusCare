// src/components/Loader.jsx
import { motion } from "framer-motion";
import logo from "../assests/logo.jpg";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-bgLight dark:bg-bgDark flex flex-col items-center justify-center gap-4 ">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <img
          src={logo}
          alt="Sleevnex Logo"
          className="h-24 w-24 object-contain"
        />
      </motion.div>
      <motion.div
        className="text-primary text-3xl font-bold tracking-widest relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="relative z-10"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          CAMPUS CARE
        </motion.span>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-20 blur-lg"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
