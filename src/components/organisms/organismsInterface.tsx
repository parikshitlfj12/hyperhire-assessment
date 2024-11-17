import { StaticImageData } from "next/image";

import { DropdownItem } from "../atoms/atomInterface";
import { ReactNode } from "react";

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
  logo: StaticImageData;
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
  icon: ReactNode | string;
  label: string;
}

export interface BannerSectionInterface {
  carousalProfiles: ProfileItem[];
  bannerSliderItems: BannerSliderItem[];
}
