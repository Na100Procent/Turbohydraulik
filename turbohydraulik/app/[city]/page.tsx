import { FC } from "react";
import { websiteData } from "../data/data";
import { CityData, ServiceData } from "../data/types";
import CityPage from "./CityPage";
import ServicePage from "./ServicePage";
import { PageProps } from "@/.next/types/app/[city]/page";

export const generateStaticParams = async () => {
  const citySlugs = Object.keys(websiteData.cities);
  const serviceSlugs = Object.keys(websiteData.services);

  const paths = [...citySlugs, ...serviceSlugs].map((slug) => ({
    city: slug,
  }));

  return paths;
};

const CityOrServicePage: FC<PageProps> = async ({ params }) => {
  const { city: currentSlug } = await params;

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
};

export default CityOrServicePage;
