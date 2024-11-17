"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { DropdownItem, DropdownProps } from "./interface";

const DropdownButton: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <button onClick={onClick} className="hover:underline flex items-center">
    {label}
    <span className="text-sm ml-1">
      <FaChevronDown />
    </span>
  </button>
);

const DropdownMenu: React.FC<{
  items: DropdownItem[];
  onClose: () => void;
}> = ({ items, onClose }) => (
  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
    <ul className="text-gray-800">
      {items.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose} // Close dropdown when an item is clicked
        >
          {item.label}
        </li>
      ))}
    </ul>
  </div>
);

const Dropdown: React.FC<DropdownProps> = ({ items, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <DropdownButton label={label} onClick={toggleDropdown} />
      {isDropdownOpen && <DropdownMenu items={items} onClose={closeDropdown} />}
    </div>
  );
};

export default Dropdown;
