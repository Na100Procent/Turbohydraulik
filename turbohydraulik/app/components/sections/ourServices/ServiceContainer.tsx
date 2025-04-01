import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { websiteData } from "@/app/data/data";
import { CityData, ServiceData } from "@/app/data/types/dataTypes";

interface Props {
  city?: CityData;
}

const ServiceContainer = ({ city }: Props) => {
  const cityServices = city?.availableServices;

  const services: ServiceData[] = cityServices
    ? Object.values(websiteData.services).filter((service) =>
        cityServices.includes(service.slug)
      )
    : [];
  const mappedServiceElements = services.map((service, index) => (
    <Box key={index} sx={{ margin: "0 10px" }}>
      <ServiceCard
        service={{
          name: service.name,
          slug: service.slug,
          serviceImgUrl: service.cardImageUrl,
          cardDescription: service.cardDescription,
        }}
        city={city}
      />
    </Box>
  ));

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={"20px"}
    >
      {mappedServiceElements}
    </Box>
  );
};

export default ServiceContainer;
