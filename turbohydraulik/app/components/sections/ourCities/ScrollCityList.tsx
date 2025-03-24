import React from "react";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import websiteData from "../../../data/toBeData.json";
import CityCard from "./CityCard";
import { Box } from "@mui/material";

const ScrollCityList = () => {
  const cityNamesUrls = Object.values(websiteData.cities).map((city) => ({
    title: city.name,
    url: `/${city.slug}`,
    cityCardUrl: city.cityCardUrl,
  }));

  const citiesElements = cityNamesUrls.map((city) => (
    <Box key={city.title} padding="5px">
      <CityCard
        cityName={city.title}
        cityUrl={city.url}
        cityCardUrl={city.cityCardUrl}
      />
    </Box>
  ));
  return <HorizontalScrollList mappedItems={citiesElements} />;
};

export default ScrollCityList;
