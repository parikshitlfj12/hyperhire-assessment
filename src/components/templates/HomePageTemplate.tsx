import Header from "../organisms/Header";
import BannerSection from "../organisms/BannerSection";
import DescriptionSection from "../organisms/DescriptionSection";
import { DropdownItem } from "../atoms/interface";
import {
  BannerSliderItem,
  ProfileItem,
  DescriptionItem,
  DescriptionAbout,
} from "../organisms/interface";

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
      <Header dropDownOptions={dropDownOptions} />
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
