import React from "react";
import ColorLogo from "@/assets/logoColor.png";
import Right from "@/assets/right.png";
import Image from "next/image";
import { DescriptionSectionProps } from "./interface";
import Typography from "../atoms/Typography";

export default function DescriptionSection({
  descriptionItems,
  descriptionAbout,
}: DescriptionSectionProps) {
  return (
    <div className="pt-[100px] bg-[#FBFBFB] pb-[100px] ">
      <div className="max-w-7xl mx-auto">
        {/* First */}
        <div className="flex gap-8 justify-between items-start">
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

          <div className="flex justify-between items-center gap-4">
            {descriptionItems.map((item) => {
              return (
                <div key={item.title} className="bg-white p-5 rounded-[12px]">
                  <Image
                    src={item.logo}
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

        {/* Second */}
        <div className="mt-[40px] flex justify-start items-start gap-[70px]">
          {descriptionAbout.map((item) => {
            return (
              <div key={item.title} className="max-w-[25%]">
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

        {/* Third */}
        <div className="mt-[40px]">
          <Typography className="mt-3 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
            ⓒ 2023 Hyperhire
          </Typography>
        </div>
      </div>
    </div>
  );
}
