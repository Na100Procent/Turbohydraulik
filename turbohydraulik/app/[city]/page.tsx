import { FC } from "react";
import CityPage from "./CityPage";
import ServicePage from "./ServicePage";
import { PageProps } from "@/.next/types/app/[city]/page";
import { CityData, ServiceData } from "../data/types/dataTypes";
import { getServiceDataContent } from "../components/shared/helpers/getServiceDataContent";
import { getCityDataContent } from "../components/shared/helpers/getCityDataContent";
import { citiesData, servicesData } from "../data/data";

export const generateStaticParams = async () => {
  const cities = Object.keys(citiesData);
  const services = Object.keys(servicesData);

  const paths: { city: string; slug: string }[] = [];

  cities.forEach((city) => {
    paths.push({ city, slug: "" });
  });

  services.forEach((service) => {
    paths.push({ city: service, slug: "" });
  });

  return paths;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<{ title: string; description: string }> => {
  const { city: currentSlug } = await params;

  const slugIsCity = Object.keys(citiesData).includes(currentSlug);

  const slug: CityData | ServiceData = slugIsCity
    ? citiesData[currentSlug as keyof typeof citiesData]
    : servicesData[currentSlug as keyof typeof servicesData];

  if (slugIsCity) {
    const { metaContent } = getCityDataContent(slug as CityData);
    return {
      title: metaContent.title,
      description: metaContent.description,
    };
  }
  const { metaContent } = getServiceDataContent(slug as ServiceData);
  return {
    title: metaContent.title,
    description: metaContent.description,
  };
};

const CityOrServicePage: FC<PageProps> = async ({ params }) => {
  const { city: currentSlug } = await params;

  const slugIsCity = Object.keys(citiesData).includes(currentSlug);

  const slug: CityData | ServiceData = slugIsCity
    ? citiesData[currentSlug as keyof typeof citiesData]
    : servicesData[currentSlug as keyof typeof servicesData];

  return (
    <>
      {slugIsCity ? (
        <CityPage cityData={slug as CityData} />
      ) : (
        <ServicePage serviceData={slug as ServiceData} />
      )}
    </>
  );
};

export default CityOrServicePage;
