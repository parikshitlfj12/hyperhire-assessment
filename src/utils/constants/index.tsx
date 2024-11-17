import itemIcon1 from "@/assets/itemIcon1.png";
import itemIcon2 from "@/assets/itemIcon2.png";
import itemIcon3 from "@/assets/itemIcon3.png";
import itemIcon4 from "@/assets/itemIcon4.png";

import Profile from "@/assets/profile.png";
import { FaGlobe, FaNewspaper, FaCube, FaChartLine } from "react-icons/fa";

export const DROPDOWN_OPTIONS = [
  { label: "해외 개발자 원격 채용" },
  {
    label: "외국인 원격 채용 (비개발 직군)",
  },
  {
    label: "한국어 가능 외국인 채용",
  },
];

export const DESCRIPTION_ITEMS = [
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

export const DESCRIPTION_ABOUT = [
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

export const CAROUSAL_PROFILES = [
  {
    name: "Abhishek Gupta",
    role: "마케팅 · 2y+",
    profileImage: Profile,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
    tooltip: "월 100만원",
  },

  {
    name: "Parikshit Gupta",
    role: "마케팅 · 4y+",
    profileImage: Profile,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
    tooltip: "월 100만원",
  },
  {
    name: "RishubKavya Gupta",
    role: "마케팅 · 5y+",
    profileImage: Profile,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
    tooltip: "월 100만원",
  },
  {
    name: "Kavya Gupta",
    role: "마케팅 · 1y+",
    profileImage: Profile,
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
    tooltip: "월 100만원",
  },
];

export const BANNER_SLIDER_ITEMS = [
  { icon: <FaGlobe />, label: "해외 마케팅" },
  { icon: <FaNewspaper />, label: "퍼블리셔" },
  { icon: <FaCube />, label: "캐드원(제도사)" },
  { icon: <FaChartLine />, label: "해외 세일즈" },
  { icon: <FaGlobe />, label: "해외 마케팅" },
  { icon: <FaNewspaper />, label: "퍼블리셔" },
  { icon: <FaCube />, label: "캐드원(제도사)" },
  { icon: <FaChartLine />, label: "해외 세일즈" },
];
