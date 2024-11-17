import React from "react";
import ColorLogo from "@/assets/logoColor.png";
import Right from "@/assets/right.png";
import Image from "next/image";
import { DescriptionSectionProps } from "./interface";
import Typography from "../atoms/Typography";
import itemIcon1 from "@/assets/itemIcon1.png";
import itemIcon2 from "@/assets/itemIcon2.png";
import itemIcon3 from "@/assets/itemIcon3.png";
import itemIcon4 from "@/assets/itemIcon4.png";

export default function DescriptionSection({
  descriptionItems,
  descriptionAbout,
}: DescriptionSectionProps) {
  const itemIcons = [itemIcon1, itemIcon2, itemIcon3, itemIcon4];

  return (
    <div className="pt-[100px] bg-[#FBFBFB] pb-[100px] px-5">
      <div className="max-w-7xl mx-auto">
        {/* First Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          <div>
            <div className="flex gap-2 items-start">
              <Image src={ColorLogo} width={50} height={30} alt="color-logo" />
              <Typography className="font-bold text-xl">hyperhire</Typography>
            </div>
            <Typography className="mt-3 font-bold text-[14px] max-w-[250px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </Typography>
            <Typography className="mt-3 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
              010-0000-0000
            </Typography>
            <Typography className="mt-1 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
              aaaaa@naver.com
            </Typography>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-4 mt-6 md:mt-0">
            {descriptionItems.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-[12px] mb-6 md:mb-0 flex-1 min-w-[200px]"
                >
                  <Image
                    src={itemIcons[index] ?? 0}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <Typography className="mt-1 font-bold text-[14px]">
                    {item.title}
                  </Typography>
                  <div className="mt-3 font-bold text-[14px] flex gap-2 items-center text-[#5E626F]">
                    <Typography className="">{item.subTitle}</Typography>
                    <Image
                      style={{ cursor: "pointer" }}
                      src={Right}
                      width={20}
                      height={20}
                      alt={item.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-[40px] flex gap-8 justify-start items-start flex-wrap">
          {descriptionAbout.map((item) => {
            return (
              <div
                key={item.title}
                className="flex-1 mb-6 md:mb-0  min-w-[200px]"
              >
                <Typography className="mt-1 font-bold text-[14px]">
                  {item.title}
                </Typography>
                <Typography className="mt-1 font-bold text-[14px] text-[#5E626F]">
                  {item.subTitle}
                </Typography>
                <Typography className="mt-1 font-bold text-[14px] text-[#5E626F]">
                  {item.info}
                </Typography>
              </div>
            );
          })}
        </div>

        {/* Third Section */}
        <div className="mt-[40px]">
          <Typography className="mt-3 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
            ⓒ 2023 Hyperhire
          </Typography>
        </div>
      </div>
    </div>
  );
}
