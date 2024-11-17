import HomePageTemplate from "@/components/templates/HomePageTemplate";

export default async function Page() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/data`);
  const data = await res.json();

  return (
    <HomePageTemplate
      bannerSliderItems={data.bannerSliderItems}
      carousalProfiles={data.carousalProfiles}
      descriptionAbout={data.descriptionAbout}
      descriptionItems={data.descriptionItems}
      dropDownOptions={data.dropDownOptions}
    />
  );
}
