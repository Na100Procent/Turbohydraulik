import { websiteData } from "@/app/data/data";
import ServicePage from "./ServicePage";
import DistrictPage from "./DistrictPage";
import { FC } from "react";
import { PageProps } from "@/.next/types/app/[city]/[slug]/page";

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
        <DistrictPage slug={district} city={foundCity} />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default DynamicPage;
