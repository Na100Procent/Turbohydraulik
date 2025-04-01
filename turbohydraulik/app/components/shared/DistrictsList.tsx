import { Box } from "@mui/material";
import React from "react";
import LocationsList from "../sections/footer/components/LocationsList";
import { sectionXPadding } from "@/app/constants/styles";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "./SectionCenterHeader";
import { CityData } from "@/app/data/types/dataTypes";

interface Props {
  city: CityData;
}
const DistrictsList = ({ city }: Props) => {
  const districtsLinks = Object.values(city.districts).map((district) => ({
    title: district.name,
    url: `/${city.slug}/${district.slug}`,
  }));
  return (
    <Box
      padding={sectionXPadding}
      width="100%"
      bgcolor={theme.palette.custom.blueLight}
    >
      <Box paddingY="30px">
        <SectionCenterHeader header="Dzielnice w których działamy" />
        <LocationsList
          locsTitle={`JESTEŚMY W TYCH DZIELNICACH MIASTA ${city.name}`}
          locationsList={districtsLinks}
          addSx={{ color: theme.palette.primary.main, padding: "20px" }}
        />
      </Box>
    </Box>
  );
};

export default DistrictsList;
