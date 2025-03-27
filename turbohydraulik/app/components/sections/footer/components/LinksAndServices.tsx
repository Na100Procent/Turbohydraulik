import TitledVerticalList, {
  LinkElement,
} from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import FailureForm from "./FailureForm";
import { websiteData } from "@/app/data/data";
import { sectionXPadding } from "@/app/constants/styles";
import CitiesList from "./LocationsList";
import OpenHours from "./OpenHours";
interface Props {
  cityName?: string;
}

const containerSx = {
  display: "flex",
  padding: sectionXPadding,
  justifyContent: "space-between",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
    xs: "column",
    xxs: "column",
  },
  alignItems: "top",
  gap: "20px",
};

const linkListsSx = {
  display: "flex",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "column",
    sm: "column",
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
    xl: "80px",
    lg: "20px",
    md: "50px",
    sm: "20px",
    xs: "20px",
    xxs: "10px",
  },
  mb: "40px",
};

const LinksAndServices = ({ cityName }: Props) => {
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
        <OpenHours cityName={cityName} />
      </Box>

      <FailureForm />
    </Box>
  );
};

export default LinksAndServices;
