import React from "react";
import ColorLogo from "@/assets/logoColor.png";
import itemIcon1 from "@/assets/itemIcon1.png";
import itemIcon2 from "@/assets/itemIcon2.png";
import itemIcon3 from "@/assets/itemIcon3.png";
import itemIcon4 from "@/assets/itemIcon4.png";
import Right from "@/assets/right.png";
import Image from "next/image";

const items = [
  {
    title: "해외 개발자 원격 채용",
    subTitle: "바로가기",
    logo: itemIcon1,
  },
  {
    title: "외국인 원격 채용 (비개발)",
    subTitle: "바로가기",
    logo: itemIcon2,
  },
  {
    title: "한국어 가능 외국인 채용",
    subTitle: "바로가기",
    logo: itemIcon3,
  },
  {
    title: "해외 개발자 활용 서비스",
    subTitle: "바로가기",
    logo: itemIcon4,
  },
];

const about = [
  {
    title: "상호명",
    subTitle: "하이퍼하이어",
    info: "Hyperhire India Private Limited",
  },
  {
    title: "대표 CEO",
    subTitle: "김주현",
    info: "Juhyun Kim",
  },
  {
    title: "사업자등록번호 CIN",
    subTitle: "427-86-01187",
    info: "U74110DL2016PTC290812 ",
  },
  {
    title: "주소 ADDRESS",
    subTitle: "서울특별시 강남대로 479, 지하 1층 238호 ",
    info: "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
  },
];

export default function DescriptionSection({}) {
  return (
    <div className="pt-[100px]  bg-[#FBFBFB] pb-[100px] ">
      <div className="max-w-7xl mx-auto">
        {/* First */}
        <div className="flex gap-8 justify-between items-start">
          <div>
            <div className="flex gap-2 items-start">
              <Image src={ColorLogo} width={50} height={30} alt="color-logo" />
              <p className="font-bold text-xl">hyperhire</p>
            </div>
            <p className="mt-3 font-bold text-[14px] max-w-[250px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="mt-3 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
              010-0000-0000
            </p>
            <p className="mt-1 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
              aaaaa@naver.com
            </p>
          </div>

          <div className="flex justify-between items-center gap-4">
            {items.map((item) => {
              return (
                <div key={item.title} className="bg-white p-5 rounded-[12px]">
                  <Image
                    src={item.logo}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <p className="mt-1 font-bold text-[14px]">{item.title}</p>
                  <div className="mt-3 font-bold text-[14px] flex gap-2 items-center text-[#5E626F]">
                    <p>{item.subTitle}</p>
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
          {about.map((item) => {
            return (
              <div key={item.title} className="max-w-[25%]">
                <p className="mt-1 font-bold text-[14px]">{item.title}</p>
                <p className="mt-1 font-bold text-[14px] text-[#5E626F]">
                  {item.subTitle}
                </p>
                <p className="mt-1 font-bold text-[14px] text-[#5E626F]">
                  {item.info}
                </p>
              </div>
            );
          })}
        </div>

        {/* Third */}
        <div className="mt-[40px]">
          <p className="mt-3 font-bold text-[14px] max-w-[250px] text-[#5E626F]">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </div>
    </div>
  );
}
