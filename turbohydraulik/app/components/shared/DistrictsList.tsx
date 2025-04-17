import { Box } from "@mui/material";
import React from "react";
import LocationsList from "../sections/footer/components/LocationsList";
import { sectionXPadding } from "@/app/constants/styles";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "./SectionCenterHeader";
import { CityData } from "@/app/data/types/dataTypes";
import { DistrictsListContent } from "@/app/data/types/sectionTypes";

interface Props {
  city: CityData;
  content: DistrictsListContent;
}
const DistrictsList = ({ city, content }: Props) => {
  const { districtsListH2, districtsListText } = content;
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
        <SectionCenterHeader header={districtsListH2 ? districtsListH2 : ""} />
        <LocationsList
          locsTitle={districtsListText ? districtsListText : ""}
          locationsList={districtsLinks}
          addSx={{ color: theme.palette.primary.main, padding: "20px" }}
          alignItems="start"
        />
      </Box>
    </Box>
  );
};

export default DistrictsList;
