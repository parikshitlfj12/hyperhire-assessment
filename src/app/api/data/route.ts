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

  try {
    const jsonData = JSON.stringify(data);
    return new NextResponse(jsonData, { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error("Error serializing response:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
