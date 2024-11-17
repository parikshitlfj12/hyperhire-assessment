import React, { useState, useEffect } from "react";
import { SliderItems, SliderProps } from "../atoms/interface";

const Slider: React.FC<SliderProps> = ({ items, interval }) => {
  const [visibleItems, setVisibleItems] = useState<SliderItems[]>(items);

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

  return visibleItems.slice(0, 4).map((item, index) => (
    <div
      key={index}
      className="flex flex-1 items-center bg-blue-300 bg-opacity-20 p-4 rounded-lg min-w-[150px] justify-center"
    >
      <div className="text-white text-2xl mr-2">{item.icon}</div>
      <span className="text-white font-semibold">{item.label}</span>
    </div>
  ) );
};

export default Slider;
