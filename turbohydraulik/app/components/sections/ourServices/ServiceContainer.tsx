import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { CityData } from "@/app/data/types/dataTypes";
import { getServicesOfCity } from "../../shared/helpers/getServicesOfCity";

interface Props {
  city?: CityData;
}

const ServiceContainer = ({ city }: Props) => {
  const servicesOfCity = getServicesOfCity(city);
  const mappedServiceElements = servicesOfCity.map((service, index) => (
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
