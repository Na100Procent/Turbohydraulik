import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceShortcut";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import { websiteData } from "@/app/data/data";

interface Props {
  city?: string;
}

const ServiceHorizontalScrollList = ({ city }: Props) => {
  const mappedServiceElements = Object.values(websiteData.services).map(
    (service, index) => (
      <Box key={index} sx={{ margin: "0 10px" }}>
        <ServiceCard service={service} cityName={city} />
      </Box>
    )
  );

  return <HorizontalScrollList mappedItems={mappedServiceElements} />;
};

export default ServiceHorizontalScrollList;
