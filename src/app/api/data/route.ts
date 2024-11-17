import { NextResponse } from "next/server";
import {
  BANNER_SLIDER_ITEMS,
  CAROUSAL_PROFILES,
  DESCRIPTION_ABOUT,
  DESCRIPTION_ITEMS,
  DROPDOWN_OPTIONS,
} from "@/utils/constants";

export async function GET() {
  const data = {
    bannerSliderItems: BANNER_SLIDER_ITEMS,
    carousalProfiles: CAROUSAL_PROFILES,
    descriptionAbout: DESCRIPTION_ABOUT,
    descriptionItems: DESCRIPTION_ITEMS,
    dropDownOptions: DROPDOWN_OPTIONS,
  };

  return NextResponse.json(data);
}
