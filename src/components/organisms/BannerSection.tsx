"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Typography from "../atoms/Typography";
import { BannerSectionInterface } from "./organismsInterface";

export default function BannerSection({
  carousalProfiles,
  bannerSliderItems,
}: BannerSectionInterface) {
  const totalItems = carousalProfiles.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(bannerSliderItems);
  const slideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prevItems) => {
        const firstItem = prevItems[0];
        const remainingItems = prevItems.slice(1);
        return [...remainingItems, firstItem];
      });
    }, slideInterval);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Get the three items to display: current, previous, and next
  const getDisplayedItems = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    return [
      carousalProfiles[prevIndex],
      carousalProfiles[currentIndex],
      carousalProfiles[nextIndex],
    ];
  };

  const displayedItems = getDisplayedItems();
  return (
    <div className="py-[50px] bg-gradient-to-r from-teal-400 to-blue-600">
      <div className="max-w-7xl text-white flex justify-between items-center gap-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center w-[50%]">
          {/* Header Section */}
          <section className="mb-12">
            {/* Tag */}
            <Typography className="inline-block bg-[#FFFFFF] text-[#40E2E8] font-semibold px-4 py-1 rounded-[8px] text-sm mb-4">
              풀타임, 파트타임
            </Typography>

            {/* Main Title */}
            <Typography className="text-3xl md:text-4xl font-bold mb-4">
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </Typography>

            {/* Subtext */}
            <Typography className="text-base md:text-lg mb-4">
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
            </Typography>

            {/* Link */}
            <a href="#" className="underline">
              개발자가 필요하신가요?
            </a>
          </section>

          {/* Additional Information Section */}
          <section className="flex flex-col md:flex-row md:space-x-6 ">
            <div className="p-6 rounded-lg max-w-sm mb-4 md:mb-0">
              <Typography className="font-semibold">평균 월 120만원</Typography>
              <Typography>임금을 해당 국가를 기준으로 계산합니다.</Typography>
            </div>
            <div className="p-6 rounded-lg max-w-sm mb-4 md:mb-0">
              <Typography className="font-semibold">
                최대 3회 인력교체
              </Typography>
              <Typography>
                막상 채용해보니 맞지 않아도 걱정하지 마세요.
              </Typography>
            </div>
            <div className="p-6 rounded-lg max-w-sm">
              <Typography className="font-semibold">
                평균 3일, 최대 10일
              </Typography>
              <Typography>
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </Typography>
            </div>
          </section>
        </div>

        {/* Card Section */}
        <div className="flex flex-col w-[50%] justify-center items-center">
          {/* Tooltip Above the Carousel */}
          <div className="relative flex justify-center items-center mb-8">
            <div className="bg-[#E6FAF5] text-[#1EBC9C] font-semibold px-3 py-2 rounded-lg shadow-lg flex items-center">
              {/* Icon */}
              <div className="text-[#1EBC9C] mr-2 flex items-center justify-center">
                <span className="text-lg">💵</span>
              </div>
              {/* Text */}
              <Typography className="text-md font-bold">
                {displayedItems[1].tooltip}
              </Typography>
            </div>

            {/* Tooltip Arrow */}
            <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E6FAF5] rotate-45 shadow-md"></div>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center gap-4">
            {/* Left Navigation Button */}
            <button onClick={handlePrev} className="text-white text-2xl">
              <FaArrowLeft />
            </button>

            <div className="flex w-[100%] justify-center relative">
              <div className="absolute left-[0] w-[70%] bg-white text-gray-800 p-6 rounded-xl shadow-lg  transform scale-90 opacity-70 -translate-x-4 transition duration-300">
                <div className="relative flex justify-center mb-4">
                  <Image
                    src={displayedItems[0].profileImage}
                    alt={displayedItems[0].name}
                    className="rounded-full w-20 h-20 border-4 border-white"
                  />
                </div>
                <Typography className="text-lg font-bold text-center">
                  {displayedItems[0].name}
                </Typography>
                <Typography className="text-blue-600 text-center">
                  {displayedItems[0].role}
                </Typography>
                <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
                  {displayedItems[0].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Card */}
              <div className="z-10 bg-white w-[70%] text-gray-800 p-6 rounded-xl shadow-lg transform scale-105 transition duration-300">
                <div className="relative flex justify-center mb-4">
                  <Image
                    src={displayedItems[1].profileImage}
                    alt={displayedItems[1].name}
                    className="rounded-full w-24 h-24 border-4 border-white"
                  />
                </div>
                <Typography className="text-xl font-bold text-center">
                  {displayedItems[1].name}
                </Typography>
                <Typography className="text-blue-600 text-center">
                  {displayedItems[1].role}
                </Typography>
                <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
                  {displayedItems[1].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Card */}
              <div className="absolute right-[0] w-[70%] bg-white text-gray-800 p-6 rounded-xl shadow-lg transform scale-90 opacity-70 translate-x-4 transition duration-300">
                <div className="relative flex justify-center mb-4">
                  <Image
                    src={displayedItems[2].profileImage}
                    alt={displayedItems[2].name}
                    className="rounded-full w-20 h-20 border-4 border-white"
                  />
                </div>
                <Typography className="text-lg font-bold text-center">
                  {displayedItems[2].name}
                </Typography>
                <Typography className="text-blue-600 text-center">
                  {displayedItems[2].role}
                </Typography>
                <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
                  {displayedItems[2].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Navigation Button */}
            <button onClick={handleNext} className="text-white text-2xl">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-5 flex justify-between overflow-hidden rounded-lg gap-2">
        {visibleItems.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-1 items-center bg-blue-300 bg-opacity-20 p-4 rounded-lg min-w-[150px] justify-center"
          >
            <div className="text-white text-2xl mr-2">{item.icon}</div>
            <span className="text-white font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
