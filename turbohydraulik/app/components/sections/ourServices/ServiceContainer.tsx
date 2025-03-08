import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceShortcut";
import { websiteData } from "@/app/data/data";

interface Props {
  city?: string;
}

const ServiceContainer = ({ city }: Props) => {
  const mappedServiceElements = Object.values(websiteData.services).map(
    (service, index) => (
      <Box key={index} sx={{ margin: "0 10px" }}>
        <ServiceCard service={service} cityName={city} />
      </Box>
    )
  );

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
