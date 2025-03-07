import React from "react";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import { websiteData } from "@/app/data/data";
import CityCard from "./CityCard";

const ScrollCityList = () => {
  const cityNamesUrls = Object.values(websiteData.cities).map((city) => ({
    title: city.name,
    url: `/${city.slug}`,
  }));

  const citiesElements = cityNamesUrls.map((city) => (
    <CityCard key={city.title} cityName={city.title} cityUrl={city.url} />
  ));
  return <HorizontalScrollList mappedItems={citiesElements} />;
};

export default ScrollCityList;
