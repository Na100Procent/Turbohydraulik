import { websiteData } from "@/app/data/data";
import { CityData } from "@/app/data/types";
import { Box } from "@mui/material";
import React from "react";
import LocationsList from "../sections/footer/components/LocationsList";
import { sectionXPadding } from "@/app/constants/styles";

interface Props {
  city: CityData;
}
const DistrictsList = ({ city }: Props) => {
  const cityDistricts = websiteData.cities[city.slug].districts;
  const districtsLinks = Object.values(cityDistricts).map((district) => ({
    title: district.name,
    url: `/${city.slug}/${district.slug}`,
  }));
  return (
    <Box padding={sectionXPadding} width="100%" mt="100px">
      <LocationsList
        locsTitle={`JESTEŚMY W TYCH DZIELNICACH MIASTA ${city.name}`}
        locationsList={districtsLinks}
      />
    </Box>
  );
};

export default DistrictsList;
