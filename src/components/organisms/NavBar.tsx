"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Dropdown from "../atoms/Dropdown";
import Button from "../atoms/Button";
import Link from "next/link";
import { HeaderProps } from "./interface";

export default function NavBar({ dropDownOptions }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 p-4">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="hyperhire logo" />
          <span className="ml-2 text-white text-lg font-semibold">
            hyperhire
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-8 text-white relative gap-12">
          <Dropdown items={dropDownOptions} label="채용" />
          <Link href="#" className="hover:underline">
            해외 개발자 활용 서비스
          </Link>
        </nav>

        {/* Desktop "문의하기" Button */}
        <div className="hidden md:block">
          <Button
            className="bg-white text-blue-600"
            onClick={() => console.log("Inquiry button clicked")}
          >
            문의하기
          </Button>
        </div>
      </header>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="text-white md:hidden flex flex-col items-center space-y-4 mt-4">
          <Dropdown items={dropDownOptions} label="채용" />
          <Link href="#" className="text-white hover:underline">
            해외 개발자 활용 서비스
          </Link>
          <Button
            className="bg-white text-blue-600"
            onClick={() => console.log("Inquiry button clicked")}
          >
            문의하기
          </Button>
        </div>
      )}
    </div>
  );
}
