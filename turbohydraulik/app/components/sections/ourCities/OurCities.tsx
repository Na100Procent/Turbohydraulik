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

const locationsListSx = {
  width: "100%",
  display: "flex",
  justifyContent: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
    xxs: "center",
  },
};

const buttonSx = {
  display: "flex",
  justifyContent: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "center",
    xs: "center",
    xxs: "center",
  },
  mt: "30px",
};

const OurCities = () => {
  const cityNamesUrls: LinkElement[] = Object.values(citiesData)
    .map((city) => ({
      title: city.name,
      url: `/${city.slug}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

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
          <Box sx={locationsListSx}>
            <LocationsList
              locsTitle="JESTEŚMY W MIASTACH"
              addSx={{ color: theme.palette.primary.main }}
              locationsList={cityNamesUrls}
            />
          </Box>
          <Box sx={buttonSx}>
            <CallUsButton />
          </Box>
        </LazyReveal>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurCities;
