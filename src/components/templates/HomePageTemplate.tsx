// import Header from "@/components/organisms/Header";
import BannerSection from "@/components/organisms/BannerSection";
import DescriptionSection from "@/components/organisms/DescriptionSection";
import { DropdownItem } from "@/components/atoms/interface";
import {
  BannerSliderItem,
  ProfileItem,
  DescriptionItem,
  DescriptionAbout,
} from "@/components/organisms/interface";

interface HomePageTemplateProps {
  bannerSliderItems: BannerSliderItem[];
  carousalProfiles: ProfileItem[];
  descriptionItems: DescriptionItem[];
  descriptionAbout: DescriptionAbout[];
  dropDownOptions: DropdownItem[];
}

export default function HomePageTemplate({
  bannerSliderItems,
  carousalProfiles,
  descriptionItems,
  descriptionAbout,
  dropDownOptions,
}: HomePageTemplateProps) {
  return (
    <>
      {/* <Header dropDownOptions={dropDownOptions} /> */}
      <BannerSection
        carousalProfiles={carousalProfiles}
        bannerSliderItems={bannerSliderItems}
      />
      <DescriptionSection
        descriptionItems={descriptionItems}
        descriptionAbout={descriptionAbout}
      />
    </>
  );
}
