"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "9 to 5 Employee, 5 to 9 Founder",
  "pre-rich",
  "Ai Fullstack Engineer"
];

export function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[20px] flex items-center relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-sans font-semibold text-[14px] text-[#9E9E9E] absolute left-0 whitespace-nowrap"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
