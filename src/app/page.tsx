import HomePageTemplate from "@/components/templates/HomePageTemplate";

export default async function Page() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const res = await fetch(`${apiBaseUrl}/api/data`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
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
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data. Please try again later.</div>;
  }
}
