import { StaticImageData } from "next/image";

import { DropdownItem } from "../atoms/interface";

export interface HeaderProps {
  dropDownOptions: DropdownItem[];
}

export interface DescriptionSectionProps {
  descriptionItems: DescriptionItem[];
  descriptionAbout: DescriptionAbout[];
}

export interface DescriptionItem {
  title: string;
  subTitle: string;
  logo: string;
}

export interface DescriptionAbout {
  title: string;
  subTitle: string;
  info: string;
}

export interface ProfileItem {
  name: string;
  role: string;
  profileImage: StaticImageData;
  skills: string[];
  tooltip: string;
}

export interface BannerSliderItem {
  label: string;
}

export interface BannerSectionInterface {
  carousalProfiles: ProfileItem[];
  bannerSliderItems: BannerSliderItem[];
}
