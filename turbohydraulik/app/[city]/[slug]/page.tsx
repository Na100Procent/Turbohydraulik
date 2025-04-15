import { websiteData } from "@/app/data/data";
import ServicePage from "./ServicePage";
import DistrictPage from "./DistrictPage";
import { FC } from "react";
import { PageProps } from "@/.next/types/app/[city]/[slug]/page";
import {
  CityData,
  DistrictData,
  ServiceData,
} from "@/app/data/types/dataTypes";
import { getCityServiceDataContent } from "@/app/components/shared/helpers/getCityServiceDataContent";
import { getDistrictDataContent } from "@/app/components/shared/helpers/getDistrictDataContent";

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
    const cityData =
      websiteData.cities[city as keyof typeof websiteData.cities];
    Object.keys(cityData.districts).forEach((district) => {
      paths.push({ city, slug: district });
    });
  });

  return paths;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<{ title: string; description: string }> => {
  const { city: cityParam, slug: slugParam } = await params;

  const errorMetaData = {
    title: "Turbohydraulik ",
    description: "Turbohydraulik ",
  };

  const cityService: ServiceData =
    websiteData.services[slugParam as keyof typeof websiteData.services];

  const foundCity: CityData =
    websiteData.cities[cityParam as keyof typeof websiteData.cities];

  if (cityService) {
    const cityServiceContent: DistrictData =
      cityService.citiesContent[cityParam as keyof typeof websiteData.cities];

    if (!cityServiceContent) return errorMetaData;
    const { metaContent } = getCityServiceDataContent(
      cityServiceContent,
      cityService
    );

    return {
      title: metaContent?.title,
      description: metaContent?.description,
    };
  }
  if (foundCity) {
    const district: DistrictData =
      foundCity.districts[slugParam as keyof typeof foundCity.districts];

    const { metaContent } = getDistrictDataContent(district);
    return {
      title: metaContent?.title,
      description: metaContent?.description,
    };
  }
  return errorMetaData;
};

const DynamicPage: FC<PageProps> = async ({ params }) => {
  const { city: cityParam, slug: slugParam } = await params;

  const cityService: ServiceData =
    websiteData.services[slugParam as keyof typeof websiteData.services];

  const foundCity: CityData =
    websiteData.cities[cityParam as keyof typeof websiteData.cities];

  const district =
    foundCity.districts[slugParam as keyof typeof foundCity.districts];

  const cityServiceContent =
    cityService?.citiesContent[cityParam as keyof typeof websiteData.cities];

  return (
    <div>
      {cityService ? (
        <ServicePage
          serviceData={cityServiceContent}
          cityService={cityService}
          city={foundCity}
        />
      ) : district ? (
        <DistrictPage districtData={district} city={foundCity} />
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default DynamicPage;
