import { StaticImageData } from "next/image";

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
