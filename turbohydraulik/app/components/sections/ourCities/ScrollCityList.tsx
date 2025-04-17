import React from "react";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import CityCard from "./CityCard";
import { Box } from "@mui/material";
import { citiesData } from "@/app/data/data";

const ScrollCityList = () => {
  const cityNamesUrls = Object.values(citiesData)
    .map((city) => ({
      title: city.name,
      url: `/${city.slug}`,
      cityCardUrl: city.cityCardUrl,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  const citiesElements = cityNamesUrls.map((city) => (
    <Box key={city.title} paddingX="5px">
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
