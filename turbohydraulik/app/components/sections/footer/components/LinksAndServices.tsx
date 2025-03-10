import TitledVerticalList, {
  LinkElement,
} from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import FailureForm from "./FailureForm";
import { websiteData } from "@/app/data/data";
import { sectionXPadding } from "@/app/constants/styles";
import CitiesList from "./LocationsList";

const containerSx = {
  display: "flex",
  padding: sectionXPadding,
  justifyContent: "space-between",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  alignItems: "center",
};

const linkListsSx = {
  display: "flex",

  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
    xxs: "column",
  },
  justifyContent: {
    xl: "left",
    lg: "left",
    md: "left",
    sm: "space-between",
    xs: "space-between",
    xxs: "space-between",
  },
  width: "100%",
  gap: {
    xl: "200px",
    lg: "200px",
    md: "80px",
    sm: "50px",
    xs: "50px",
    xxs: "50px",
  },
  mb: "40px",
};

const LinksAndServices = () => {
  const servicesNamesUrls: LinkElement[] = Object.values(
    websiteData.services
  ).map((service) => ({
    title: service.name,
    url: `/${service.slug}`,
  }));
  const cityNamesUrls: LinkElement[] = Object.values(websiteData.cities).map(
    (city) => ({
      title: city.name,
      url: `/${city.slug}`,
    })
  );
  return (
    <Box sx={containerSx}>
      <Box sx={linkListsSx}>
        <CitiesList locationsList={cityNamesUrls} />
        <TitledVerticalList title="USŁUGI" list={servicesNamesUrls} />
      </Box>
      <FailureForm />
    </Box>
  );
};

export default LinksAndServices;
