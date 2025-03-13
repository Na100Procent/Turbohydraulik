import websiteData from "../../../data/toBeData.json";
import { ServiceData } from "@/app/data/types/dataTypes";

const getCityServices = (cityServices: string[]) => {
  const services: ServiceData[] = Object.values(websiteData.services);

  const servicesPriceList = cityServices
    .map((serviceSlug: string) => {
      const service = services.find((service) => service.slug === serviceSlug);
      if (service)
        return {
          title: service.name,
          price: service.price,
        };
    })
    .filter((service) => service !== undefined);
  return servicesPriceList;
};

export default getCityServices;
