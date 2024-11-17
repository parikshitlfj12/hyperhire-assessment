"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Typography from "../atoms/Typography";
import { BannerSectionInterface } from "./interface";
import Link from "next/link";
import Tooltip from "../atoms/Tooltip";
import ProfileCard from "../molecules/ProfileCard";
import Slider from "../molecules/Slider";
import { motion } from "framer-motion";  // Import motion

export default function BannerSection({
  carousalProfiles,
  bannerSliderItems,
}: BannerSectionInterface) {
  const totalItems = carousalProfiles.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

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
          <section className="mb-12">
            {/* FadeIn with delay for first Typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography className="inline-block bg-[#FFFFFF] text-[#40E2E8] font-bold px-4 py-1 rounded-[8px] text-sm mb-4">
                풀타임, 파트타임
              </Typography>
            </motion.div>

            {/* FadeInUp for title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography className="text-3xl md:text-4xl font-bold mb-4">
                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
              </Typography>
            </motion.div>

            {/* FadeInUp for subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography className="text-base md:text-lg mb-4">
                법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
              </Typography>
            </motion.div>
          </section>

          {/* Additional Information Section - Fade In 3 elements */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:space-x-6 "
          >
            <div className="mr-6 pt-4 max-w-sm mb-4 md:mb-0 border-t border-t-white">
              <Typography className="font-semibold">평균 월 120만원</Typography>
              <Typography>임금을 해당 국가를 기준으로 계산합니다.</Typography>
            </div>
            <div className="mr-6 pt-4 max-w-sm mb-4 md:mb-0 border-t border-t-white">
              <Typography className="font-semibold">
                최대 3회 인력교체
              </Typography>
              <Typography>
                막상 채용해보니 맞지 않아도 걱정하지 마세요.
              </Typography>
            </div>
            <div className="pt-4 max-w-sm border-t border-t-white">
              <Typography className="font-semibold">
                평균 3일, 최대 10일
              </Typography>
              <Typography>
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </Typography>
            </div>
          </motion.section>
        </div>

        {/* Card Section */}
        <div className="flex flex-col w-[50%] justify-center items-center">
          {/* FadeIn Tooltip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Tooltip text="월 100만원" />
          </motion.div>

          {/* FadeIn Bottom Cards and Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative flex items-center gap-4"
          >
            {/* Left Navigation Button */}
            <button onClick={handlePrev} className="text-white text-2xl">
              <FaArrowLeft />
            </button>

            {/* Profile Cards */}
            <div className="flex w-[100%] justify-center relative">
              {displayedItems.map((item, index) => {
                const position =
                  index === 0 ? "left" : index === 1 ? "center" : "right";
                const scale = position === "center" ? 105 : 90;
                const opacity = position === "center" ? 100 : 70;
                return (
                  <ProfileCard
                    key={index}
                    profileImage={item.profileImage}
                    name={item.name}
                    role={item.role}
                    skills={item.skills}
                    scale={scale}
                    opacity={opacity}
                    position={position}
                  />
                );
              })}
            </div>

            {/* Right Navigation Button */}
            <button onClick={handleNext} className="text-white text-2xl">
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider - Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-7xl mx-auto mt-[50px] flex justify-between overflow-hidden rounded-lg gap-2"
      >
        <Slider items={bannerSliderItems} interval={5000} />
      </motion.div>
    </div>
  );
}
