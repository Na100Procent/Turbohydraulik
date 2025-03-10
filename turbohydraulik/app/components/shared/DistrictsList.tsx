import { websiteData } from "@/app/data/data";
import { CityData } from "@/app/data/types";
import { Box } from "@mui/material";
import React from "react";
import LocationsList from "../sections/footer/components/LocationsList";
import { sectionXPadding } from "@/app/constants/styles";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "./SectionCenterHeader";

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
    <Box
      padding={sectionXPadding}
      width="100%"
      bgcolor={theme.palette.custom.blueLight}
    >
      <Box padding="30px 0">
        <SectionCenterHeader
          header="Dzielnice w których działamy"
          topHeader="Dzielnice"
        />
        <LocationsList
          locsTitle={`JESTEŚMY W TYCH DZIELNICACH MIASTA ${city.name}`}
          locationsList={districtsLinks}
          addSx={{ color: theme.palette.primary.main, padding: "20px" }}
        />{" "}
      </Box>
    </Box>
  );
};

export default DistrictsList;
