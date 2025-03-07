import TitledVerticalList from "@/app/components/shared/TitledVerticalList";
import { Box } from "@mui/material";
import React from "react";
import FailureForm from "./FailureForm";
import { websiteData } from "@/app/data/data";

interface LinkElement {
  title: string;
  url: string;
}

const LinksAndServices = () => {
  const cityNamesUrls: LinkElement[] = Object.values(websiteData.cities).map(
    (city) => ({
      title: city.name,
      url: `/${city.slug}`,
    })
  );

  const servicesNamesUrls: LinkElement[] = Object.values(
    websiteData.services
  ).map((service) => ({
    title: service.name,
    url: `/${service.slug}`,
  }));
  return (
    <Box display={"flex"} padding={"0 100px"} justifyContent={"space-between"}>
      <TitledVerticalList title="LOKALIZACJE" list={cityNamesUrls} />
      <TitledVerticalList title="USŁUGI" list={servicesNamesUrls} />
      <FailureForm />
    </Box>
  );
};

export default LinksAndServices;
