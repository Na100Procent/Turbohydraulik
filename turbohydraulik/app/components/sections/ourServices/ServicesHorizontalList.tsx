import React from "react";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceShortcut";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import { serviceCardsData } from "@/app/constants/mockedData";

const ServiceHorizontalScrollList = () => {
  const mappedServiceElements = serviceCardsData.map((item, index) => (
    <Box key={index} sx={{ margin: "0 10px" }}>
      <ServiceCard title={item.title} imageUrl={item.imageUrl} />
    </Box>
  ));

  return <HorizontalScrollList mappedItems={mappedServiceElements} />;
};

export default ServiceHorizontalScrollList;
