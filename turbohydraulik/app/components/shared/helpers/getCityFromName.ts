import { websiteData } from "@/app/data/data";
import { CityData } from "@/app/data/types";

const getCityFromName = (cityName: string): CityData | null => {
  const cityKey = Object.keys(websiteData.cities).find(
    (key) =>
      websiteData.cities[key].name.toLowerCase() === cityName.toLowerCase()
  );

  return cityKey ? websiteData.cities[cityKey] : null;
};

export default getCityFromName;
