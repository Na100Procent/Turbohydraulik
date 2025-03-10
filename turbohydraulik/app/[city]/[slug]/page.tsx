import { websiteData } from "@/app/data/data";
import ServicePage from "./ServicePage";
import DistrictPage from "./DistrictPage";
import { FC } from "react";
import { PageProps } from "@/.next/types/app/[city]/[slug]/page";

export const generateStaticParams = async () => {
  const cities = Object.keys(websiteData.cities);
  const services = Object.keys(websiteData.services);

  const paths: { city: string; slug: string }[] = [];

  cities.forEach((city) => {
    services.forEach((service) => {
      paths.push({ city, slug: service });
    });
  });

  cities.forEach((city) => {
    const cityData = websiteData.cities[city];
    Object.keys(cityData.districts).forEach((district) => {
      paths.push({ city, slug: district });
    });
  });

  return paths;
};

const DynamicPage: FC<PageProps> = async ({ params }) => {
  const { city: cityParam, slug: slugParam } = await params;
  const service = websiteData.services[slugParam];
  const foundCity = websiteData.cities[cityParam];
  const district = foundCity?.districts[slugParam];

  return (
    <div>
      {service ? (
        <ServicePage service={service} city={foundCity} />
      ) : district ? (
        <DistrictPage district={district} city={foundCity} />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default DynamicPage;
