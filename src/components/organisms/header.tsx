"use client";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Dropdown from "../atoms/Dropdown";
import Button from "../atoms/Button";
import Link from "next/link";
import { DropdownItem } from "../atoms/atomInterface";
interface HeaderProps {
  dropDownOptions: DropdownItem[];
}

export default function Header({ dropDownOptions }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 p-4">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="hyperhire logo" />{" "}
          <span className="ml-2 text-white text-lg font-semibold">
            hyperhire
          </span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex space-x-8 text-white relative gap-12">
          <Dropdown items={dropDownOptions} label="채용" />

          <Link href="#" className="hover:underline">
            해외 개발자 활용 서비스
          </Link>
        </nav>

        <Button
          className="bg-white text-blue-600"
          onClick={() => console.log("Inquiry button clicked")}
        >
          문의하기
        </Button>
      </header>
    </div>
  );
}
