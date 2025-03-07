import { websiteData } from "../data/data";
import { CityData, ServiceData } from "../data/types";
import CityPage from "./CityPage";
import ServicePage from "./ServicePage";

export default function CityOrServicePage({
  params,
}: {
  params: { city: string };
}) {
  const currentSlug = params.city;

  const slugIsCity = Object.keys(websiteData.cities).includes(currentSlug);
  const slug = slugIsCity
    ? websiteData.cities[currentSlug]
    : websiteData.services[currentSlug];

  return (
    <>
      {slugIsCity ? (
        <CityPage city={slug as CityData} />
      ) : (
        <ServicePage service={slug as ServiceData} />
      )}
    </>
  );
}
