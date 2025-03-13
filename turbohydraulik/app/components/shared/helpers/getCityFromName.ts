import { websiteData } from "@/app/data/data";
import { CityData } from "@/app/data/types/dataTypes";

const getCityFromName = (cityName: string): CityData | null => {
  const cityKey = Object.keys(websiteData.cities).find(
    (key) =>
      websiteData.cities[
        key as keyof typeof websiteData.cities
      ].name.toLowerCase() === cityName.toLowerCase()
  );

  return cityKey
    ? websiteData.cities[cityKey as keyof typeof websiteData.cities]
    : null;
};

export default getCityFromName;
