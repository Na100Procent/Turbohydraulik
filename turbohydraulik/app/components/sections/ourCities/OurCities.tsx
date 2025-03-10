import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import ScrollCityList from "./ScrollCityList";
import CallUsButton from "../../shared/CallUsButton";
import LocationsList from "../footer/components/LocationsList";
import { LinkElement } from "../../shared/TitledVerticalList";
import { websiteData } from "@/app/data/data";

const LocationsListSx = {
  width: "100%",
  display: "flex",
  justifyContent: "left",
  mt: "50px",
};

const OurCities = () => {
  const cityNamesUrls: LinkElement[] = Object.values(websiteData.cities).map(
    (city) => ({
      title: city.name,
      url: `/${city.slug}`,
    })
  );
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        padding={"50px 0px 50px 0"}
      >
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeaderColor={theme.palette.secondary.main}
            topHeader="OUR LOCATIONS"
            header="Plumbing Services in Your City"
          />
        </SectionPaddingWrapper>
        <ScrollCityList />
        <div>
          <CallUsButton />
        </div>
        <Box sx={LocationsListSx}>
          <LocationsList
            addSx={{ color: theme.palette.primary.main }}
            locationsList={cityNamesUrls}
          />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurCities;
