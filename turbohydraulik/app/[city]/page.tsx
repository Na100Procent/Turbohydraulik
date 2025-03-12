import { FC } from "react";
import websiteData from "../data/toBeData.json";
import { CityContent, ServiceContent } from "../data/types";
import CityPage from "./CityPage";
import ServicePage from "./ServicePage";
import { PageProps } from "@/.next/types/app/[city]/page";

export const generateStaticParams = async () => {
  const cities = Object.keys(websiteData.cities);
  const services = Object.keys(websiteData.services);

  const paths: { city: string; slug: string }[] = [];

  cities.forEach((city) => {
    paths.push({ city, slug: "" });
  });

  services.forEach((service) => {
    paths.push({ city: service, slug: "" });
  });

  return paths;
};

const CityOrServicePage: FC<PageProps> = async ({ params }) => {
  const { city: currentSlug } = await params;

  const slugIsCity = Object.keys(websiteData.cities).includes(currentSlug);
  const slug: CityContent | ServiceContent = slugIsCity
    ? websiteData.cities[currentSlug as keyof typeof websiteData.cities]
    : websiteData.services[currentSlug as keyof typeof websiteData.services];

  return (
    <>
      {slugIsCity ? (
        <CityPage city={slug as CityContent} />
      ) : (
        <ServicePage service={slug as ServiceContent} />
      )}
    </>
  );
};

export default CityOrServicePage;
