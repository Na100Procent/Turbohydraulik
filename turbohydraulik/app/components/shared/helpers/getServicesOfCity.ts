import { servicesData } from "@/app/data/data";
import { CityData, ServiceData } from "@/app/data/types/dataTypes";

export const getServicesOfCity = (city?: CityData) => {
  if (!city) return Object.values(servicesData);
  const cityServices = city?.availableServices;

  const services: ServiceData[] = cityServices
    ? Object.values(servicesData).filter((service) =>
        cityServices.includes(service.slug)
      )
    : [];

  return services;
};
