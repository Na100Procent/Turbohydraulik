import { FC } from "react";
import websiteData from "../data/toBeData.json";
import CityPage from "./CityPage";
import ServicePage from "./ServicePage";
import { PageProps } from "@/.next/types/app/[city]/page";
import { CityData, ServiceData } from "../data/types/dataTypes";
import { getServiceDataContent } from "../components/shared/helpers/getServiceDataContent";
import { getCityDataContent } from "../components/shared/helpers/getCityDataContent";
import NotFoundPage from "../not-found";

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

export const generateMetadata = async ({
  params,
}: PageProps): Promise<{ title: string; description: string }> => {
  const { city: currentSlug } = await params;

  const slugIsCity = Object.keys(websiteData.cities).includes(currentSlug);

  const slug: CityData | ServiceData = slugIsCity
    ? websiteData.cities[currentSlug as keyof typeof websiteData.cities]
    : websiteData.services[currentSlug as keyof typeof websiteData.services];

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

  const slugIsCity = Object.keys(websiteData.cities).includes(currentSlug);
  const isValidCity = Object.keys(websiteData.cities).includes(currentSlug);
  const isValidService = Object.keys(websiteData.services).includes(
    currentSlug
  );

  if (!isValidCity && !isValidService) {
    return <NotFoundPage />;
  }

  const slug: CityData | ServiceData = slugIsCity
    ? websiteData.cities[currentSlug as keyof typeof websiteData.cities]
    : websiteData.services[currentSlug as keyof typeof websiteData.services];

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
