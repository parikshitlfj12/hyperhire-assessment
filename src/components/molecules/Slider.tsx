import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SliderItems, SliderProps } from "../atoms/interface";
import { FaGlobe, FaNewspaper, FaCube, FaChartLine } from "react-icons/fa";

const Slider: React.FC<SliderProps> = ({ items, interval }) => {
  const [visibleItems, setVisibleItems] = useState<SliderItems[]>(items);
  const icons = [FaGlobe, FaNewspaper, FaCube, FaChartLine];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setVisibleItems((prevItems) => {
        const firstItem = prevItems[0];
        const remainingItems = prevItems.slice(1);
        return [...remainingItems, firstItem];
      });
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  return (
    <div className="flex gap-8 overflow-hidden w-full">
      <AnimatePresence mode="popLayout">
        {visibleItems.slice(0, 4).map((item, index) => {
          const RandomIcon = icons[index % icons.length];
          return (
            <motion.div
              key={item.label + index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-1 items-center bg-blue-300 bg-opacity-20 px-4 py-2 rounded-lg min-w-[150px] justify-start"
            >
              <div className="text-white text-2xl mr-2 bg-[#FFFFFF66] p-2 rounded-md">
                <RandomIcon />
              </div>
              <span className="text-white font-semibold">{item.label}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
