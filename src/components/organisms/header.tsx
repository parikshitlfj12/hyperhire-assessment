"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Header({}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 p-4">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section with Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="hyperhire logo" />{" "}
          {/* Replace with actual logo path */}
          <span className="ml-2 text-white text-lg font-semibold">
            hyperhire
          </span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex space-x-8 text-white relative gap-12">
          {/* Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:underline flex items-center"
            >
              채용{" "}
              <span className="text-sm ml-1">
                <FaChevronDown />
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <ul className="text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    해외 개발자 원격 채용
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    외국인 원격 채용 (비개발 직군)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    한국어 가능 외국인 채용
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="hover:underline">
            해외 개발자 활용 서비스
          </a>
        </nav>

        {/* Right Button */}
        <button className="bg-white text-blue-600 font-medium py-2 px-4 rounded-full">
          문의하기
        </button>
      </header>
    </div>
  );
}
