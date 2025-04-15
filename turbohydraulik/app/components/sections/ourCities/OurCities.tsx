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
import { sectionXPadding } from "@/app/constants/styles";
import { citiesData, homepageDataContent } from "@/app/data/data";
import LazyReveal from "./LazyReveal";

const LocationsListSx = {
  width: "100%",
  display: "flex",
  justifyContent: "left",
  mt: "50px",
};

const OurCities = () => {
  const cityNamesUrls: LinkElement[] = Object.values(citiesData).map(
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
        padding={sectionXPadding}
      >
        <SectionPaddingWrapper>
          <SectionCenterHeader header={homepageDataContent.locations_h2} />
        </SectionPaddingWrapper>
        <LazyReveal>
          <ScrollCityList />
          <CallUsButton />
          <Box sx={LocationsListSx}>
            <LocationsList
              locsTitle="JESTEŚMY W MIASTACH"
              addSx={{ color: theme.palette.primary.main }}
              locationsList={cityNamesUrls}
            />
          </Box>
        </LazyReveal>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurCities;
