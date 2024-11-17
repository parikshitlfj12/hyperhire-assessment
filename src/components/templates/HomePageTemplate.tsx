import React from "react";
import BannerSection from "../organisms/BannerSection";
import { DESCRIPTION_ABOUT, DESCRIPTION_ITEMS, DROPDOWN_OPTIONS } from "@/utils/constants";
import Header from "../organisms/Header";
import DescriptionSection from "../organisms/DescriptionSection";

export default function HomePageTemplate({}) {
  return (
    <>
      <Header dropDownOptions={DROPDOWN_OPTIONS} />
      <BannerSection />
      <DescriptionSection
        descriptionItems={DESCRIPTION_ITEMS}
        descriptionAbout={DESCRIPTION_ABOUT}
      />
    </>
  );
}
