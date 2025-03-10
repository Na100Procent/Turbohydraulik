import React from "react";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import { websiteData } from "@/app/data/data";
import CityCard from "./CityCard";
import { Box } from "@mui/material";

const ScrollCityList = () => {
  const cityNamesUrls = Object.values(websiteData.cities).map((city) => ({
    title: city.name,
    url: `/${city.slug}`,
  }));

  const citiesElements = cityNamesUrls.map((city) => (
    <Box key={city.title} padding="5px">
      <CityCard cityName={city.title} cityUrl={city.url} />
    </Box>
  ));
  return <HorizontalScrollList mappedItems={citiesElements} />;
};

export default ScrollCityList;
