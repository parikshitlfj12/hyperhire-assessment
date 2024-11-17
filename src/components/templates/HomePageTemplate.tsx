import React from "react";
import BannerSection from "../organisms/banner-section";
import DescriptionSection from "../organisms/description-section";
import { DROPDOWN_OPTIONS } from "@/utils/constants";
import Header from "../organisms/Header";

export default function HomePageTemplate({}) {
  return (
    <>
      <Header dropDownOptions={DROPDOWN_OPTIONS}/>
      <BannerSection />
      <DescriptionSection />
    </>
  );
}
